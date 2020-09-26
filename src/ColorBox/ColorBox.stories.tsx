/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ColorBox from './ColorBox';
import {
  withKnobs,
  text,
  boolean,
  select,
  radios,
} from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';

export default {
  title: 'components/Color',
  component: ColorBox,
  decorators: [withKnobs],
};

export const color = () => {
  const color = select(
    'color',
    [
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
  const number = select('number', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

  return <ColorBox color={color} number={number} />;
};

color.story = {
  name: 'Default',
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const gray = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.GRAY} number={i} />
      ))}
    </div>
  );
};

export const red = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.RED} number={i} />
      ))}
    </div>
  );
};

export const pink = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.PINK} number={i} />
      ))}
    </div>
  );
};

export const grape = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.GRAPE} number={i} />
      ))}
    </div>
  );
};

export const violet = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.VIOLET} number={i} />
      ))}
    </div>
  );
};

export const indigo = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.INDIGO} number={i} />
      ))}
    </div>
  );
};

export const blue = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.BLUE} number={i} />
      ))}
    </div>
  );
};

export const cyan = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.CYAN} number={i} />
      ))}
    </div>
  );
};

export const teal = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.TEAL} number={i} />
      ))}
    </div>
  );
};

export const green = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.GREEN} number={i} />
      ))}
    </div>
  );
};

export const lime = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.LIME} number={i} />
      ))}
    </div>
  );
};

export const yellow = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.YELLOW} number={i} />
      ))}
    </div>
  );
};

export const orange = () => {
  return (
    <div css={colorBoxStyle}>
      {numbers.map((i) => (
        <ColorBox key={i} color={Color.ORANGE} number={i} />
      ))}
    </div>
  );
};

const colorBoxStyle = css`
  display: flex;
`;
