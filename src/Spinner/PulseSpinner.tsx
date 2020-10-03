/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { SpinnerProps } from './Spinner';

interface StyledPulseSpinnerProps extends SpinnerProps {}

function PulseSpinner({ color, zIndex, variant }: SpinnerProps) {
  return (
    <StyledPulseSpinner color={color} zIndex={zIndex} variant={variant}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledPulseSpinner>
  );
}

const StyledPulseSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: ${(props: StyledPulseSpinnerProps) => props.zIndex};

  & > div {
    display: inline-block;
    position: absolute;
    left: 0.5rem;
    width: 0.5rem;
    background: ${(props: StyledPulseSpinnerProps) => palette[props.color][5]};
    animation: pulse-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  & > div:nth-of-type(1) {
    left: 0.5rem;
    animation-delay: -0.4s;
  }
  & > div:nth-of-type(2) {
    left: 1.2rem;
    animation-delay: -0.3s;
  }
  & > div:nth-of-type(3) {
    left: 1.9rem;
    animation-delay: -0.2s;
  }
  & > div:nth-of-type(4) {
    left: 2.6rem;
    animation-delay: -0.1s;
  }
  & > div:nth-of-type(5) {
    left: 3.3rem;
    animation-delay: 0s;
  }
  @keyframes pulse-animation {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export default PulseSpinner;
