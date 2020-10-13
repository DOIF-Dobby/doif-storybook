/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

interface ButtonGroupProps {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다. */
  align: 'left' | 'center' | 'right';
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap: number | string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /** 스타일 커스터마이징 하고 싶을 때 사용 */
  className?: string;
}

interface StyledButtonGroupProps {
  direction: 'row' | 'column';
  align: 'left' | 'center' | 'right';
  gap: number | string;
}

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup`을 사용하세요.
 */
function ButtonGroup({
  direction,
  align,
  children,
  gap,
  className,
}: ButtonGroupProps) {
  return (
    <StyledButtonGroup
      direction={direction}
      align={align}
      gap={gap}
      className={className}
    >
      {children}
    </StyledButtonGroup>
  );
}

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
  align: 'left',
};

const StyledButtonGroup = styled.div`
  display: flex;
  width: 100%;
  ${(props: StyledButtonGroupProps) => {
    let justifyContent = '';

    if (props.align === 'left') {
      justifyContent = 'flex-start';
    } else if (props.align === 'center') {
      justifyContent = 'center';
    } else if (props.align === 'right') {
      justifyContent = 'flex-end';
    }

    return `
      justify-content: ${justifyContent};
      flex-direction: ${props.direction};
      button + button {
        ${props.direction === 'row' ? 'margin-left' : 'margin-top'} : ${
      props.gap
    };
      }
    `;
  }};
`;
const alignStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;
