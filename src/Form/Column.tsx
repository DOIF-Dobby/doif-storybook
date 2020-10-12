/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface ColumnProps {
  /** `Column` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
}

/**
 * `Column` 컴포넌트는 `Row` 컴포넌트 안에서 사용합니다.
 */
function Column(props: ColumnProps) {
  return <div className="column">{props.children}</div>;
}

export default Column;
