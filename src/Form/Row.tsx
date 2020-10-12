/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface RowProps {
  /** `Row` 컴포넌트 안에는 Column` 컴포넌트를 사용하여 구성합니다. */
  children: React.ReactNode;
}

/**
 * `Row` 컴포넌트는 `Form` 컴포넌트 안에서 사용합니다.
 */
function Row(props: RowProps) {
  return <StyledRow className="row">{props.children}</StyledRow>;
}

const StyledRow = styled.div`
  &.row {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
`;

export default Row;
