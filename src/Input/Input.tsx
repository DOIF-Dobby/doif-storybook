/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
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
  variant: 'basic' | 'underline' | 'outline';
  /** label을 설정합니다. `variant`가 `underline`이나 `outline`일 경우 필수로 넣어야합니다.*/
  label?: string;
  /** input의 색을 정합니다. */
  color: Color;
  /** input의 넓이를 설정합니다. */
  width?: string | number;
  /** input에 icon을 넣습니다. */
  icon?: React.ReactNode;
  /** 커스텀 스타일을 적용할 수 있습니다. */
  css?: SerializedStyles;
}

export interface StyledInputProps {
  color: Color;
  number: number;
  width?: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

/**
 * `Input` 컴포넌트는 값을 입력할 때 사용합니다.
 */
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
