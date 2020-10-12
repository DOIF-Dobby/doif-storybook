/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface LabelProps {
  /** `Column` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
}

/**
 * `Label` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
function Label(props: LabelProps) {
  return <div className="label">{props.children}</div>;
}

export default Label;
