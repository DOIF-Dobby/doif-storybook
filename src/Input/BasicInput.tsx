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
      width={props.width ? props.width : '100%'}>
      <input {...props} title={props.label} placeholder={props.label} />
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
