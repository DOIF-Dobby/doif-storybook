/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { InputHTMLAttributes } from 'react';
import Color from '../styles/colors/Color';
import OutlineInput from './OutlineInput';
import BasicInput from './BasicInput';
import UnderlineInput from './UnderlineInput';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** input의 모양을 설정합니다. */
  variant?: 'basic' | 'underline' | 'outline';
  /** label을 설정합니다. `variant`가 `underline`이나 `around`일 경우 필수로 넣어야합니다.*/
  label?: string;
  /** input의 색을 정합니다. */
  color: Color;
  /** input의 넓이를 설정합니다. */
  width?: string | number;
}

export type StyledInputProps = {
  color: Color;
  number: number;
  width: string | number;
};

function Input(props: InputProps) {
  switch (props.variant) {
    case 'basic':
      return <BasicInput {...props} />;
    case 'underline':
      return <UnderlineInput {...props} />;
    case 'outline':
      return <OutlineInput {...props} />;
    default:
      return null;
  }
}

Input.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
  type: 'text',
};

export default Input;
