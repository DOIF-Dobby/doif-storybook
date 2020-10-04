import React from 'react';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { InputProps, StyledInputProps } from './Input';

function UnderlineInput(props: InputProps) {
  const isSelect = props.isSelect;
  const newProps = Object.assign({}, props);
  delete newProps.isSelect;

  return (
    <StyledInput
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      width={props.width ? props.width : '100%'}
      disabled={props.disabled}
      isSelect={isSelect}>
      <input {...newProps} title={props.label} placeholder=" " />
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
    border-bottom: 1px solid ${palette.gray[7]};
    padding: 0;
    background-color: transparent;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${palette.gray[8]};
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  ${(props: StyledInputProps) => {
    if (props.isSelect) {
      return `
        & > input:hover {
          cursor: pointer;
        }
        &::after {
          content: '\\25bc';
          font-size: 1rem;
          display: flex;
          color: #495057;
          width: 2.5rem;
          height: 100%;
          text-align: center;
          top: 0;
          right: 0;
          position: absolute;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }
        &:focus-within::after {
          color: ${palette[props.color][props.number]};
        }
      `;
    }
  }}

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
    color: ${palette.gray[7]};
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
