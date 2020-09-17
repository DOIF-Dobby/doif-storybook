/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        outline: none;
        border: none;
        box-sizing: border-box;
      }
    `}
  />
);
