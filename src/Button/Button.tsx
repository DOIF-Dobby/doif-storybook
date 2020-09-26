/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';

import palette from '../styles/colors/palette';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼의 색을 설정합니다. */
  color: Color;
  /**  */
  variant: 'contain' | 'outline' | 'text';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

type ColorProps = {
  color: Color;
  colorNumber: number;
};

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
function Button({
  children,
  color,
  variant,
  size,
  disabled,
  width,
  iconOnly,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      color={color}
      colorNumber={color === Color.GRAY ? 7 : 5}
      css={[
        style,
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'violet',
  size: 'medium',
  variant: 'contain',
};

const style = css`
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;

  &:hover:enabled {
    cursor: pointer;
  }
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props: ColorProps) =>
    palette[props.color][props.colorNumber]};
  color: white;

  &:hover:enabled {
    background-color: ${(props: ColorProps) =>
      palette[props.color][props.colorNumber + 1]};
  }
  &:active:enabled {
    background-color: ${(props: ColorProps) =>
      palette[props.color][props.colorNumber + 2]};
  }
  &:disabled {
    opacity: 0.4;
  }
`;

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.25rem;
  `,
  big: css`
    width: 2.75rem;
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 1rem;

    svg {
      width: 0.9rem;
      margin-right: 0.5rem;
    }
  `,
  medium: css`
    height: 2.25rem;
    font-size: 1rem;
    padding: 0 1rem;

    svg {
      width: 1.2rem;
      margin-right: 0.75rem;
    }
  `,
  big: css`
    height: 2.75rem;
    font-size: 1.25rem;
    padding: 0 1.2rem;

    svg {
      width: 1.4rem;
      margin-right: 1rem;
    }
  `,
};

export default Button;
