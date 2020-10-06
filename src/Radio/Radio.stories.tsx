/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Radio from './Radio';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';
import { ChangeEvent, useCallback, useState } from 'react';

export default {
  title: 'components/Radio',
  component: Radio,
  decorators: [withKnobs],
};

export const radio = () => {
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

  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(value);
  }, []);

  return (
    <Radio
      data={data}
      value={value}
      color={color}
      name="radio"
      disabled={disabled}
      onChange={onChange}
    />
  );
};

radio.story = {
  name: 'Default',
};

export const defValRadio = () => {
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

  const defVal = {
    code: '',
    name: '선택없음',
  };

  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(value);
  }, []);

  return (
    <Radio
      data={data}
      value={value}
      name="defval"
      onChange={onChange}
      defVal={defVal}
    />
  );
};

export const initValRadio = () => {
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

  const defVal = {
    code: '',
    name: '선택없음',
  };

  const [value, setValue] = useState('B');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(value);
  }, []);

  return (
    <Radio
      data={data}
      value={value}
      name="initval"
      onChange={onChange}
      defVal={defVal}
    />
  );
};

export const disabledRadio = () => {
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

  const defVal = {
    code: '',
    name: '선택없음',
  };

  const [value, setValue] = useState('A');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(value);
  }, []);

  return (
    <Radio
      data={data}
      value={value}
      name="disabled"
      onChange={onChange}
      defVal={defVal}
      disabled
    />
  );
};
