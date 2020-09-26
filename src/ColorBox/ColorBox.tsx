/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Color } from '../styles/colors/Color';
import palette from '../styles/colors/palette';

type ColorNumberType = {
  color: Color;
  number: number;
};

function ColorBox({ color, number }: ColorNumberType) {
  const colorPalette = palette[color];

  return (
    <div css={[colorStyle, { backgroundColor: colorPalette[number] }]}>
      <span css={contentsStyle}>{colorPalette[number]}</span>
    </div>
  );
}

const colorStyle = css`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const contentsStyle = css`
  color: white;
  font-size: 1.1rem;
`;

export default ColorBox;
