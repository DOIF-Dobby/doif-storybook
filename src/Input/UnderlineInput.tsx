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
      disabled={props.disabled}
      icon={props.icon}
    >
      <input {...props} title={props.label} placeholder=" " css={props.css} />
      <div className="underline"></div>
      <label>{props.label}</label>
      <div className="icon-wrapper" onClick={props.onClick}>
        {props.icon && props.icon}
      </div>
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

    ${(props: StyledInputProps) => props.icon && `padding-right: 2.5rem`};

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
    if (props.disabled) {
      return `
        & > input:hover {
          cursor: default;
        }
        &::after {
          color: ${palette.gray[5]};
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
    border-bottom: 1px solid ${palette.gray[5]};
    color: ${palette.gray[5]};
  }
  & > input:disabled ~ label {
    color: ${palette.gray[5]};
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

  & > div.icon-wrapper {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${(props: StyledInputProps) =>
      props.disabled ? palette.gray[5] : palette.gray[7]};
  }

  & > input:focus ~ div.icon-wrapper {
    color: ${(props: StyledInputProps) => palette[props.color][props.number]};
  }
`;

export default UnderlineInput;
