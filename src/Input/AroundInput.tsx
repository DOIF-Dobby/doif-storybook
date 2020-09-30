import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import { InputProps } from './Input';

type StyledInputProps = {
  color: Color;
  number: number;
  width: string | number;
};

function AroundInput({
  label,
  color,
  width,
  type,
  value,
  onChange,
  onInput,
}: InputProps) {
  return (
    <StyledInput
      color={color}
      number={color === Color.GRAY ? 7 : 5}
      width={width ? width : '100%'}>
      <input
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        onInput={onInput}
        title={label}
      />
      <label>{label}</label>
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
    border: 1px solid ${palette.gray[6]};
    border-radius: 4px;
    padding: 0 0.75rem 0 0.75rem;
  }
  & > input:focus ~ label,
  & > input:not(:placeholder-shown) ~ label {
    transform-origin: 0 0;
    transform: translateY(-1rem) scale(0.8);
    transition: transform 0.2s ease;
  }

  & > input:focus {
    border: 2px solid
      ${(props: StyledInputProps) => palette[props.color][props.number]};
  }

  & > input:focus ~ label {
    color: ${(props: StyledInputProps) => palette[props.color][props.number]};
  }

  & > label {
    position: absolute;
    bottom: 0.75rem;
    left: 0.5rem;
    color: ${palette.gray[6]};
    pointer-events: none;
    transition: all 0.2s ease;
    background-color: #ffffff;
    padding: 0 0.5rem 0 0.5rem;
  }
`;

export default AroundInput;
