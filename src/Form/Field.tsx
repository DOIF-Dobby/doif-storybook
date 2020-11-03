/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface FieldProps {
  /** `Field` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
  /** width */
  width?: string;
}

/**
 * `Field` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
function Field(props: FieldProps) {
  return (
    <StyledField className="field">
      <div>{props.children}</div>
    </StyledField>
  );
}

const StyledField = styled.div`
  width: calc(100% - 10rem);
  display: flex;
  align-items: center;

  & > div {
    flex-basis: 100%;
    height: 100%;
  }
  /* padding: 0.2rem 1rem 0.2rem 0.5rem; */
`;

export default Field;
