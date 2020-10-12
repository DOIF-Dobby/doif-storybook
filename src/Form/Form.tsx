/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface FormProps {
  /** `Form` 컴포넌트 안에는 `Row` 컴포넌트와 `Column` 컴포넌트를 사용하여 form을 구성합니다. */
  children: React.ReactNode;
}

/**
 * `Form` 컴포넌트는 데이터를 전송할 때 사용합니다.
 */
function Form(props: FormProps) {
  return <StyledForm>{props.children}</StyledForm>;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Form;
