import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

type UnderlineInputProps = {
  placeholder?: string;
  color: Color;
  width?: string | number;
};

type StyledInputProps = {
  color: Color;
  number: number;
  width: string | number;
};

function UnderlineInput({ placeholder, color, width }: UnderlineInputProps) {
  return (
    <StyledInput
      color={color}
      number={color === Color.GRAY ? 7 : 5}
      width={width ? width : '100%'}>
      <input type="text" placeholder=" " />
      <div className="underline"></div>
      <label>{placeholder}</label>
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
