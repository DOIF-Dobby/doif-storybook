import React from 'react';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { InputProps, StyledInputProps } from './Input';

function BasicInput(props: InputProps) {
  const isSelect = props.isSelect;
  const newProps = Object.assign({}, props);
  delete newProps.isSelect;

  return (
    <StyledInput
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      width={props.width ? props.width : '100%'}
      disabled={props.disabled}
      isSelect={isSelect}
    >
      <input {...newProps} title={props.label} placeholder={props.label} />
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
    if (props.isSelect) {
      return `
        & > input:hover {
          cursor: pointer;
        }
        &::after {
          content: '\\25bc';
          font-size: 1rem;
          display: flex;
          color: ${palette.gray[7]};
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
  }
  & > input:disabled {
    background-color: #fff;
    border: 1px solid ${palette.gray[5]};
    color: ${palette.gray[5]};

    &::placeholder {
      color: ${palette.gray[5]};
    }
  }
`;

export default BasicInput;
