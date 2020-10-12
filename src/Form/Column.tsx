/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface ColumnProps {
  /** `Column` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
  /** width */
  width?: string;
}

interface StyledColumnProps {
  width?: string;
}

/**
 * `Column` 컴포넌트는 `Row` 컴포넌트 안에서 사용합니다.
 */
function Column(props: ColumnProps) {
  return (
    <StyledColumn className="column" width={props.width}>
      {props.children}
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  display: flex;
  align-items: center;

  ${(props: StyledColumnProps) =>
    props.width ? `flex-basis: ${props.width} !important` : ''}
`;

export default Column;
