/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { theme } from '../styles/themes/themes';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: 'primary' | 'secondary';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 * @param param0
 */
function Button({
  children,
  theme,
  size,
  disabled,
  width,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const { primary, secondary } = theme;

const style = css`
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

const themes = {
  primary: css`
    background: ${primary.button.base};
    color: ${primary.button.font};
    &:hover:enabled {
      background: ${primary.button.hover};
    }
    &:active:enabled {
      background: ${primary.button.active};
    }
    &:disabled {
      background: ${primary.button.disable};
    }
  `,
  secondary: css`
    background: ${secondary.button.base};
    color: ${secondary.button.font};
    &:hover:enabled {
      background: ${secondary.button.hover};
    }
    &:active:enabled {
      background: ${secondary.button.active};
    }
    &:disabled {
      color: ${secondary.button.disable};
      background: ${secondary.button.base};
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

export default Button;
