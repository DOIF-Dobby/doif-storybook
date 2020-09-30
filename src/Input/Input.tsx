/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { InputHTMLAttributes } from 'react';
import Color from '../styles/colors/Color';
import AroundInput from './AroundInput';
import BasicInput from './BasicInput';
import UnderlineInput from './UnderlineInput';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** input의 모양을 설정합니다. */
  variant?: 'basic' | 'underline' | 'around';
  /** label을 설정합니다. `variant`가 `underline`이나 `around`일 경우 필수로 넣어야합니다.*/
  label?: string;
  /** input의 색을 정합니다. */
  color: Color;
  /** input의 넓이를 설정합니다. */
  width?: string | number;
}

function Input({
  variant,
  label,
  color,
  width,
  type,
  value,
  onChange,
  onInput,
}: InputProps) {
  switch (variant) {
    case 'basic':
      return (
        <BasicInput
          label={label}
          color={color}
          width={width}
          type={type}
          value={value}
          onChange={onChange}
          onInput={onInput}
        />
      );
    case 'underline':
      return (
        <UnderlineInput
          label={label}
          color={color}
          width={width}
          type={type}
          value={value}
          onChange={onChange}
          onInput={onInput}
        />
      );
    case 'around':
      return (
        <AroundInput
          label={label}
          color={color}
          width={width}
          type={type}
          value={value}
          onChange={onChange}
          onInput={onInput}
        />
      );
  }
}

Input.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
  type: 'text',
};

export default Input;
