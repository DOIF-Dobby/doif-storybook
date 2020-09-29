/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import AroundInput from './AroundInput';
import UnderlineInput from './UnderlineInput';

type InputProps = {
  /** input의 모양을 설정합니다. */
  variant: 'basic' | 'underline' | 'around';
  /** placeholder를 설정합니다. `variant`가 `underline`이나 `around`일 경우 필수로 넣어야합니다.*/
  placeholder?: string;
  /** input의 색을 정합니다. */
  color: Color;
  /** input의 넓이를 설정합니다. */
  width?: string | number;
};

function Input({ variant, placeholder, color, width }: InputProps) {
  switch (variant) {
    case 'basic':
      return null;
    case 'underline':
      return (
        <UnderlineInput placeholder={placeholder} color={color} width={width} />
      );
    case 'around':
      return (
        <AroundInput placeholder={placeholder} color={color} width={width} />
      );
  }
}

Input.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
};

export default Input;
