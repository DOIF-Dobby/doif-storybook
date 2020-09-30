/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Color from '../styles/colors/Color';
import AroundInput from './AroundInput';
import BasicInput from './BasicInput';
import UnderlineInput from './UnderlineInput';

export type InputProps = {
  /** input의 모양을 설정합니다. */
  variant?: 'basic' | 'underline' | 'around';
  /** label을 설정합니다. `variant`가 `underline`이나 `around`일 경우 필수로 넣어야합니다.*/
  label?: string;
  /** input의 색을 정합니다. */
  color: Color;
  /** input의 넓이를 설정합니다. */
  width?: string | number;
  /** input의 값을 설정합니다. */
  value: string;
  /** input의 값을 변경하는 onChange 함수입니다. */
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ variant, label, color, width, value, onChange }: InputProps) {
  switch (variant) {
    case 'basic':
      return (
        <BasicInput
          label={label}
          color={color}
          width={width}
          value={value}
          onChange={onChange}
        />
      );
    case 'underline':
      return (
        <UnderlineInput
          label={label}
          color={color}
          width={width}
          value={value}
          onChange={onChange}
        />
      );
    case 'around':
      return (
        <AroundInput
          label={label}
          color={color}
          width={width}
          value={value}
          onChange={onChange}
        />
      );
  }
}

Input.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
};

export default Input;
