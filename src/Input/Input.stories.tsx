/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Input from './Input';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';
import Color from '../styles/colors/Color';
import { useEffect, useState } from 'react';

export default {
  title: 'components/Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const placeholder = text('placeholder', 'Name');
  const variant = select(
    'variant',
    ['basic', 'underline', 'around'],
    'underline'
  );
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
    Color.VIOLET
  );

  return <Input variant={variant} placeholder={placeholder} color={color} />;
};

input.story = {
  name: 'Default',
};

export const aroundInput = () => {
  return <Input variant="around" placeholder="Name" />;
};

export const customWidth = () => {
  return (
    <div>
      <Input variant="underline" placeholder="Name" width="50%" />
      <br />
      <Input variant="around" placeholder="Name" width="50%" />
      <br />
      <Input
        variant="underline"
        placeholder="Name"
        width="250px"
        color={Color.TEAL}
      />
      <br />
      <Input
        variant="around"
        placeholder="Name"
        width="250px"
        color={Color.GRAY}
      />
    </div>
  );
};
