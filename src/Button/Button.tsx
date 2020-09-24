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
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
};

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
function Button({
  children,
  theme,
  size,
  disabled,
  width,
  iconOnly,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const {
  button: { primary, secondary },
} = theme;

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

  svg {
    margin-right: 1rem;
  }

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
    background: ${primary.base};
    color: ${primary.font};

    &:hover:enabled {
      background: ${primary.hover};
    }
    &:active:enabled {
      background: ${primary.active};
    }
    &:disabled {
      opacity: 0.4;
    }
  `,
  secondary: css`
    background: ${secondary.base};
    color: ${secondary.font};

    &:hover:enabled {
      background: ${secondary.hover};
    }
    &:active:enabled {
      background: ${secondary.active};
    }
    &:disabled {
      opacity: 0.4;
    }
  `,
};

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
      width: 1rem;
    }
  `,
  medium: css`
    height: 2.25rem;
    font-size: 1rem;
    padding: 0 1rem;

    svg {
      width: 1.2rem;
    }
  `,
  big: css`
    height: 2.75rem;
    font-size: 1.25rem;
    padding: 0 1.2rem;

    svg {
      width: 1.4rem;
    }
  `,
};

export default Button;
