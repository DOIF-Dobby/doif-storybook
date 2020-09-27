/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

type BasicSpinnerProps = {
  color: Color;
  zIndex: number;
};

type StyledBasicSpinnerProps = {
  color: Color;
  zIndex: number;
};

function BasicSpinner({ color, zIndex }: BasicSpinnerProps) {
  return (
    <StyledBasicSpinner color={color} zIndex={zIndex}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledBasicSpinner>
  );
}

const StyledBasicSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: ${(props: StyledBasicSpinnerProps) => props.zIndex};

  & > div {
    transform-origin: 40px 40px;
    animation: basic-animation 1.2s linear infinite;
  }

  & > div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${(props: StyledBasicSpinnerProps) => palette[props.color][7]};
  }
  & > div:first-of-type() {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & > div:nth-of-type(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & > div:nth-of-type(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & > div:nth-of-type(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & > div:nth-of-type(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & > div:nth-of-type(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & > div:nth-of-type(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & > div:nth-of-type(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & > div:nth-of-type(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & > div:nth-of-type(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & > div:nth-of-type(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & > div:nth-of-type(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes basic-animation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default BasicSpinner;
