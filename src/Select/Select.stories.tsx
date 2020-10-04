/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Color from '../styles/colors/Color';
import Select from './Select';
import MSelect from '@material-ui/core/Select';

const data = [
  { code: 'A', name: '안녕하세요.' },
  { code: 'B', name: '반갑습니다.' },
  { code: 'C', name: '다시 만나요.' },
];

export default {
  title: 'components/Select',
  component: Select,
};

export const select = () => {
  return <Select data={data} />;
};

select.story = {
  name: 'Default',
};

export const underlineSelect = () => {
  return <Select variant="underline" label="Underline" data={data} />;
};

export const outlineSelect = () => {
  return <Select variant="outline" label="Outline" data={data} />;
};

export const customWidth = () => {
  return (
    <div>
      <Select width="30%" data={data} />
      <br />
      <Select
        variant="underline"
        width="30%"
        label="Underline"
        color={Color.TEAL}
        data={data}
      />
      <br />
      <Select
        variant="outline"
        width="30%"
        label="Outline"
        color={Color.RED}
        data={data}
      />
    </div>
  );
};

export const defValSelect = () => {
  const defVal = { code: '', name: '선택없음' };
  return (
    <Select
      variant="underline"
      width="30%"
      label="defVal"
      data={data}
      defVal={defVal}
    />
  );
};

export const initValSelect = () => {
  const data = [
    { code: 'CODE_01', name: '코드01' },
    { code: 'CODE_02', name: '코드02' },
    { code: 'CODE_03', name: '코드03' },
  ];
  const defVal = { code: '', name: '선택없음' };
  const initVal = 'CODE_02';

  return (
    <Select
      variant="outline"
      label="intVal"
      data={data}
      defVal={defVal}
      initVal={initVal}
    />
  );
};

export const changeSelect = () => {
  const data = [
    { code: 'CODE_01', name: '코드01' },
    { code: 'CODE_02', name: '코드02' },
    { code: 'CODE_03', name: '코드03' },
  ];
  const defVal = { code: '', name: '선택없음' };

  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <Select
        variant="outline"
        label="change"
        data={data}
        defVal={defVal}
        name="change_select"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
