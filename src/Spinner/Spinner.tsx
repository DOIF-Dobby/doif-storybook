/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { memo } from 'react';
import Color from '../styles/colors/Color';
import BasicSpinner from './BasicSpinner';
import CubeSpinner from './CubeSpinner';
import PulseSpinner from './PulseSpinner';

export interface SpinnerProps {
  /** 스피너의 모양을 결정합니다. */
  variant: 'basic' | 'pulse' | 'cube';
  /** 스피너의 색을 결정합니다. */
  color: Color;
  /** 스피너의 z-index를 설정합니다. */
  zIndex: number;
}

/**
 * `Spinner` 컴포넌트는 Loading중일 때 표시합니다.
 */
function Spinner({ variant, color, zIndex }: SpinnerProps) {
  if (variant === 'basic') {
    return <BasicSpinner color={color} zIndex={zIndex} variant={variant} />;
  } else if (variant === 'pulse') {
    return <PulseSpinner color={color} zIndex={zIndex} variant={variant} />;
  } else if (variant === 'cube') {
    return <CubeSpinner color={color} zIndex={zIndex} variant={variant} />;
  }

  return null;
}

Spinner.defaultProps = {
  variant: 'basic',
  color: Color.WHITE,
  zIndex: 1010,
};

export default memo(Spinner);
