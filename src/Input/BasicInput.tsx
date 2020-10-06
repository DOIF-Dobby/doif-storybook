import React from 'react';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { InputProps, StyledInputProps } from './Input';

function BasicInput(props: InputProps) {
  return (
    <StyledInput
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      width={props.width ? props.width : '100%'}
      disabled={props.disabled}
      icon={props.icon}
    >
      <input
        {...props}
        title={props.label}
        placeholder={props.label}
        css={props.css}
      />
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
    border: 1px solid ${palette.gray[7]};
    border-radius: 4px;
    padding: 0 0.75rem 0 0.75rem;

    ${(props: StyledInputProps) => props.icon && `padding-right: 2.5rem`};

    &::placeholder {
      color: ${palette.gray[7]};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${palette.gray[8]};
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
      box-shadow: 0 0 0px 1000px #fff inset;
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

  & > input:focus {
    border: 2px solid
      ${(props: StyledInputProps) => palette[props.color][props.number]};

    &::placeholder {
      color: ${(props: StyledInputProps) => palette[props.color][props.number]};
    }
  }

  & > input:disabled {
    background-color: #fff;
    border: 1px solid ${palette.gray[5]};
    color: ${palette.gray[5]};

    &::placeholder {
      color: ${palette.gray[5]};
    }
  }

  & > div.icon-wrapper {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${(props: StyledInputProps) =>
      props.disabled ? palette.gray[5] : palette.gray[7]};

    cursor: ${(props: StyledInputProps) => props.disabled && 'default'};
  }

  & > input:focus ~ div.icon-wrapper {
    color: ${(props: StyledInputProps) => palette[props.color][props.number]};
  }
`;

export default BasicInput;
