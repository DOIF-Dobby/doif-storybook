/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import Button from '../Button/Button';
import Check from '../Check/Check';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Sample from './Sample';

export default {
  title: 'Sample/Sample',
  component: Sample,
};

export const sample = () => {
  const data = [
    {
      code: 'CODE_01',
      name: 'code01',
    },
    {
      code: 'CODE_02',
      name: 'code02',
    },
    {
      code: 'CODE_03',
      name: 'code03',
    },
  ];
  const defVal = {
    code: '',
    name: '선택없음',
  };

  const [values, setValues] = useState({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    selectValue1: '',
    selectValue2: '',
    checkValue1: [],
    checkValue2: [],
    radioValue1: '',
    radioValue2: '',
  });

  const {
    inputValue1,
    inputValue2,
    inputValue3,
    selectValue1,
    selectValue2,
    checkValue1,
    checkValue2,
    radioValue1,
    radioValue2,
  } = values;

  /** input, selectbox Change 함수 */
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setValues((values) => ({
        ...values,
        [name]: value,
      }));
    },
    []
  );

  /** checkbox Change 함수 */
  const onChangeCheck = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const code = e.target.dataset.code;
    const { checked, name } = e.target;

    setValues((values) => ({
      ...values,
      [name]: checked
        ? values[name].concat(code)
        : values[name].filter((val: string) => val !== code),
    }));
  }, []);

  /** 버튼 클릭시 values log 찍음 */
  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      console.log(values);
    },
    [values]
  );

  return (
    <div>
      <form>
        <Select
          data={data}
          value={selectValue1}
          defVal={defVal}
          name="selectValue1"
          variant="outline"
          label="select1"
          onChange={onChange}
        />
        <br />
        <Select
          data={data}
          value={selectValue2}
          defVal={defVal}
          name="selectValue2"
          variant="outline"
          label="select2"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue1}
          name="inputValue1"
          variant="outline"
          label="input1"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue2}
          name="inputValue2"
          variant="outline"
          label="input2"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue3}
          name="inputValue3"
          variant="underline"
          label="input3"
          onChange={onChange}
        />
        <br />
        <Check
          data={data}
          value={checkValue1}
          name="checkValue1"
          onChange={onChangeCheck}
        />
        <br />
        <Check
          data={data}
          value={checkValue2}
          name="checkValue2"
          onChange={onChangeCheck}
        />
        <br />
        <Radio
          data={data}
          value={radioValue1}
          name="radioValue1"
          onChange={onChange}
        />
        <br />
        <Radio
          data={data}
          value={radioValue2}
          name="radioValue2"
          onChange={onChange}
        />
        <br />
        <Button onClick={onClick}>버튼</Button>
      </form>
    </div>
  );
};
