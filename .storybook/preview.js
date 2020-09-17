/** @jsx jsx */
import { jsx } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';
import React from 'react';
import { GlobalStyle } from '../src/styles/global';

const withGlobal = makeDecorator({
  name: 'withGlobalStyle',
  parameterName: '',
  wrapper: (getStory, context) => {
    return (
      <>
        <GlobalStyle />
        {getStory(context)}
      </>
    );
  },
});

addDecorator(withGlobal);
