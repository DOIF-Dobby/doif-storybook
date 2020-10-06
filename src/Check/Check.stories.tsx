/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Check from './Check';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';
import { ChangeEvent, useCallback, useState } from 'react';

export default {
  title: 'components/Check',
  component: Check,
  decorators: [withKnobs],
};

export const check = () => {
  const disabled = boolean('disabled', false);
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

  const data = [
    {
      code: 'A',
      name: '안녕하세요',
    },
    {
      code: 'B',
      name: '반갑습니다',
    },
    {
      code: 'C',
      name: '또 만나요',
    },
  ];

  const [value, setValue] = useState([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValue((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue)
    );
  }, []);

  return (
    <Check
      data={data}
      onChange={onChange}
      value={value}
      color={color}
      disabled={disabled}
    />
  );
};

check.story = {
  name: 'Default',
};

export const disabledCheck = () => {
  const data = [
    {
      code: 'A',
      name: '안녕하세요',
    },
    {
      code: 'B',
      name: '반갑습니다',
    },
    {
      code: 'C',
      name: '또 만나요',
    },
  ];

  const [value, setValue] = useState(['B']);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const code = e.target.dataset.code;
    const checked = e.target.checked;

    setValue((value) =>
      checked ? value.concat(code) : value.filter((val) => val !== code)
    );
  }, []);

  return <Check data={data} onChange={onChange} value={value} disabled />;
};
