/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Children } from 'react';
import palette from '../styles/colors/palette';

interface RowProps {
  /** `Row` 컴포넌트 안에는 Column` 컴포넌트를 사용하여 구성합니다. */
  children: React.ReactNode;
}

interface StyledRowProps {
  flexBasis: string;
}

/**
 * `Row` 컴포넌트는 `Form` 컴포넌트 안에서 사용합니다.
 */
function Row(props: RowProps) {
  const count = Children.count(props.children);
  const flexBasis = 100 / count + '%';

  return (
    <StyledRow className="row" flexBasis={flexBasis}>
      {props.children}
    </StyledRow>
  );
}

const StyledRow = styled.div`
  display: flex;

  & > div.column {
    flex-basis: ${(props: StyledRowProps) => props.flexBasis};
  }

  & > div.column + div.column {
    div.label {
      border-left: 1px solid ${palette.gray[5]};
    }
  }
`;

export default Row;
