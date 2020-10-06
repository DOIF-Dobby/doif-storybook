/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ChangeEvent, useCallback, useState } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';
import Select from './Select';

const data = [
  { code: 'A', name: '안녕하세요.' },
  { code: 'B', name: '반갑습니다.' },
  { code: 'C', name: '다시 만나요.' },
];

export default {
  title: 'components/Select',
  component: Select,
  decorators: [withKnobs],
};

const selectWrapperStyle = css`
  height: 300px;
`;

export const myselect = () => {
  const label = text('label', 'Name');
  const variant = select('variant', ['basic', 'underline', 'outline'], 'basic');
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

  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        data={data}
        value={value}
        onChange={onChange}
        variant={variant}
        color={color}
        label={label}
      />
    </div>
  );
};

myselect.story = {
  name: 'Default',
};

export const underlineSelect = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        variant="underline"
        label="Underline"
        data={data}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const outlineSelect = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        variant="outline"
        label="Outline"
        data={data}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const customWidth = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select width="30%" data={data} value={value} onChange={onChange} />
      <br />
      <Select
        variant="underline"
        width="30%"
        label="Underline"
        color={Color.TEAL}
        data={data}
        value={value}
        onChange={onChange}
      />
      <br />
      <Select
        variant="outline"
        width="30%"
        label="Outline"
        color={Color.RED}
        data={data}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const defValSelect = () => {
  const data = [
    { code: 'CODE_01', name: 'CODE01' },
    { code: 'CODE_02', name: 'CODE02' },
    { code: 'CODE_03', name: 'CODE03' },
    { code: 'CODE_04', name: 'CODE04' },
    { code: 'CODE_05', name: 'CODE05' },
    { code: 'CODE_06', name: 'CODE06' },
    { code: 'CODE_07', name: 'CODE07' },
    { code: 'CODE_08', name: 'CODE08' },
    { code: 'CODE_09', name: 'CODE09' },
    { code: 'CODE_10', name: 'CODE10' },
    { code: 'CODE_11', name: 'CODE11' },
    { code: 'CODE_12', name: 'CODE12' },
    { code: 'CODE_13', name: 'CODE13' },
    { code: 'CODE_14', name: 'CODE14' },
    { code: 'CODE_15', name: 'CODE15' },
    { code: 'CODE_16', name: 'CODE16' },
  ];
  const defVal = { code: '', name: '선택없음' };
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        variant="underline"
        width="30%"
        label="defVal"
        data={data}
        defVal={defVal}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const initValSelect = () => {
  const data = [
    { code: 'CODE_01', name: 'CODE01' },
    { code: 'CODE_02', name: 'CODE02' },
    { code: 'CODE_03', name: 'CODE03' },
    { code: 'CODE_04', name: 'CODE04' },
    { code: 'CODE_05', name: 'CODE05' },
    { code: 'CODE_06', name: 'CODE06' },
    { code: 'CODE_07', name: 'CODE07' },
    { code: 'CODE_08', name: 'CODE08' },
    { code: 'CODE_09', name: 'CODE09' },
    { code: 'CODE_10', name: 'CODE10' },
    { code: 'CODE_11', name: 'CODE11' },
    { code: 'CODE_12', name: 'CODE12' },
    { code: 'CODE_13', name: 'CODE13' },
    { code: 'CODE_14', name: 'CODE14' },
    { code: 'CODE_15', name: 'CODE15' },
    { code: 'CODE_16', name: 'CODE16' },
  ];
  const defVal = { code: '', name: '선택없음' };

  const [value, setValue] = useState('CODE_02');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        variant="outline"
        label="intVal"
        data={data}
        defVal={defVal}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const deiabledSelect = () => {
  const data = [
    { code: 'CODE_01', name: 'CODE01' },
    { code: 'CODE_02', name: 'CODE02' },
    { code: 'CODE_03', name: 'CODE03' },
  ];
  const defVal = { code: '', name: '선택없음' };

  const [value, setValue] = useState('CODE_02');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div css={selectWrapperStyle}>
      <Select
        variant="basic"
        label="disabled"
        width="30%"
        data={data}
        defVal={defVal}
        value={value}
        disabled
        onChange={onChange}
      />
      <br />
      <Select
        variant="underline"
        label="disabled"
        width="30%"
        data={data}
        defVal={defVal}
        value={value}
        disabled
        onChange={onChange}
      />
      <br />
      <Select
        variant="outline"
        label="disabled"
        width="30%"
        data={data}
        defVal={defVal}
        value={value}
        disabled
        onChange={onChange}
      />
    </div>
  );
};
