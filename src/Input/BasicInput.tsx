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

function BasicInput({
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
        placeholder={label}
        value={value}
        onChange={onChange}
        onInput={onInput}
        title={label}
      />
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

  & > input:focus {
    border: 2px solid
      ${(props: StyledInputProps) => palette[props.color][props.number]};
  }
`;

export default BasicInput;
