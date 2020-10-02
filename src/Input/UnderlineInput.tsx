import React from 'react';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { InputProps, StyledInputProps } from './Input';

function UnderlineInput(props: InputProps) {
  return (
    <StyledInput
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      width={props.width ? props.width : '100%'}
      disabled={props.disabled}>
      <input {...props} title={props.label} placeholder=" " />
      <div className="underline"></div>
      <label>{props.label}</label>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  height: 2.5rem;
  width: ${(props: StyledInputProps) => props.width};
  position: relative;

  & > input {
    height: 100%;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${palette.gray[6]};
    padding: 0;
    background-color: transparent;
  }
  & > input:focus ~ label,
  & > input:not(:placeholder-shown) ~ label {
    transform-origin: 0 0;
    transform: translateY(-1rem) scale(0.8);
    transition: transform 0.2s ease;
  }

  & > input:focus ~ label {
    color: ${(props: StyledInputProps) => palette[props.color][props.number]};
  }
  & > input:disabled {
    border-bottom: 1px solid ${palette.gray[4]};
    color: ${palette.gray[4]};
  }

  & > label {
    position: absolute;
    bottom: 0.75rem;
    left: 0;
    color: ${palette.gray[6]};
    pointer-events: none;
    transition: all 0.2s ease;
  }

  & > div.underline {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
  }

  & > div.underline:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: ${(props: StyledInputProps) =>
      palette[props.color][props.number]};
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  & > input:focus ~ .underline:before {
    transform: scaleX(1);
  }
`;

export default UnderlineInput;
