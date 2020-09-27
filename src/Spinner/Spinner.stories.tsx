/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Fragment } from 'react';
import DarkLayer from '../DarkLayer/DarkLayer';
import Color from '../styles/colors/Color';
import Spinner from './Spinner';

export default {
  title: 'components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '200px',
    },
  },
  decorators: [withKnobs],
};

export const spinner = () => {
  const variant = select('variant', ['basic', 'pulse'], 'basic');
  const color = select(
    'color',
    [
      Color.WHITE,
      Color.BLACK,
      Color.GRAY,
      Color.PINK,
      Color.VIOLET,
      Color.BLUE,
      Color.TEAL,
      Color.LIME,
      Color.ORANGE,
      Color.RED,
      Color.GRAPE,
      Color.INDIGO,
      Color.CYAN,
      Color.GREEN,
      Color.YELLOW,
    ],
    Color.WHITE
  );

  return (
    <Fragment>
      <DarkLayer />
      <div css={spinnerWrapper}>
        <Spinner color={color} variant={variant} />
      </div>
    </Fragment>
  );
};

spinner.story = {
  name: 'Default',
};

const spinnerWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1010;
`;

export const basicSpinner = () => {
  return (
    <Fragment>
      <DarkLayer />
      <div css={spinnerWrapper}>
        <Spinner />
      </div>
    </Fragment>
  );
};

export const pulseSpinner = () => {
  return (
    <Fragment>
      <DarkLayer />
      <div css={spinnerWrapper}>
        <Spinner variant="pulse" />
      </div>
    </Fragment>
  );
};

export const cubeSpinner = () => {
  return (
    <Fragment>
      <DarkLayer />
      <div css={spinnerWrapper}>
        <Spinner variant="cube" />
      </div>
    </Fragment>
  );
};
