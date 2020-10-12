/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface FieldProps {
  /** `Column` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
}

/**
 * `Field` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
function Field(props: FieldProps) {
  return <div className="Field">{props.children}</div>;
}

export default Field;
