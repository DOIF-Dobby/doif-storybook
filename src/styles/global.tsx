/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import palette from './colors/palette';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        outline: none;
        border: none;
        box-sizing: border-box;
        /* color: ${palette.gray[8]}; */
      }
    `}
  />
);
