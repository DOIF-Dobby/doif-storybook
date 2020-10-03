/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { SpinnerProps } from './Spinner';

interface StyledPCubeSpinnerProps extends SpinnerProps {}

function CubeSpinner({ color, zIndex, variant }: SpinnerProps) {
  return (
    <StyledCubeSpinner color={color} zIndex={zIndex} variant={variant}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledCubeSpinner>
  );
}

const StyledCubeSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  z-index: ${(props: StyledPCubeSpinnerProps) => props.zIndex};

  & > div {
    width: 33%;
    height: 33%;
    background-color: ${(props: StyledPCubeSpinnerProps) =>
      palette[props.color][5]};
    float: left;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }

  & > div:nth-of-type(1) {
    animation-delay: -0.2s;
  }
  & > div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-of-type(3) {
    animation-delay: -0.4s;
  }
  & > div:nth-of-type(4) {
    animation-delay: -0.1s;
  }
  & > div:nth-of-type(5) {
    animation-delay: -0.2s;
  }
  & > div:nth-of-type(6) {
    animation-delay: -0.3s;
  }
  & > div:nth-of-type(7) {
    animation-delay: -0s;
  }
  & > div:nth-of-type(8) {
    animation-delay: -0.1s;
  }
  & > div:nth-of-type(9) {
    animation-delay: -0.2s;
  }

  @keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }
`;

export default CubeSpinner;
