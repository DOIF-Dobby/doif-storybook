/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';

import palette from '../styles/colors/palette';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼의 색을 설정합니다. */
  color: Color;
  /** 버튼의 모양을 설정합니다. */
  variant: 'contain' | 'outline' | 'text';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** 로딩 상태, `isLoading`이 `true`면 클릭이 블가능합니다. */
  isLoading?: boolean;
}

interface StyledButtonProps extends ButtonProps {}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
function Button(props: ButtonProps) {
  return (
    <StyledButton
      disabled={props.disabled || props.isLoading}
      {...props}
      css={[
        style,
        sizes[props.size],
        { width: props.width },
        props.iconOnly && [iconOnlyStyle, iconOnlySizes[props.size]],
      ]}
    >
      <span className="contents-style">{props.children}</span>
    </StyledButton>
  );
}

Button.defaultProps = {
  color: Color.VIOLET,
  size: 'medium',
  variant: 'contain',
};

const style = css`
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
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
  span.contents-style {
    display: flex;
    align-items: center;
  }

  ${(props: StyledButtonProps) => {
    const colorNumber = props.color === Color.GRAY ? 7 : 5;

    switch (props.variant) {
      case 'contain':
        return `
          background-color: ${palette[props.color][colorNumber]};
          color: white;
          border: none;
          &:hover:enabled {
            background-color: ${palette[props.color][colorNumber + 1]}};
            transition: all 0.15s;
          }
          &:active:enabled {
            background-color: ${palette[props.color][colorNumber + 2]}};
          }
          &:disabled {
            opacity: 0.4;
          }
          &:active {
            & > span.contents-style {
              text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

              & > svg {
                // stroke: black;
              }
            }
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${palette[props.color][colorNumber]};
          border: 1px solid ${palette[props.color][colorNumber]};
          &:hover:enabled {
            background-color: ${palette[props.color][0]}};
            transition: all 0.15s;
          }
          &:active:enabled {
            background-color: ${palette[props.color][1]}};
          }
          &:disabled {
            opacity: 0.4;
          }
        `;
      case 'text':
        return `
          background-color: white;
          color: ${palette[props.color][colorNumber]};
          border: none;
          &:hover:enabled {
            background-color: ${palette[props.color][0]}};
            transition: all 0.15s;
          }
          &:active:enabled {
            background-color: ${palette[props.color][1]}};
          }
          &:disabled {
            opacity: 0.4;
          }
        `;
    }
  }}
`;

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 4px;
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
