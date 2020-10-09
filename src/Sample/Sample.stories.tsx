/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Button from '../Button/Button';
import Check from '../Check/Check';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Sample from './Sample';
import useChange from '../hooks/useChange';
import useChangeDate from '../hooks/useChangeDate';
import useChangeCheck from '../hooks/useChangeCheck';
import * as DateUtil from '../libs/DateUtil';

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

  const initValues: { [index: string]: any } = {
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    selectValue1: '',
    selectValue2: '',
    checkValue1: [],
    checkValue2: [],
    radioValue1: '',
    radioValue2: '',
    startDate: '',
    endDate: '',
  };

  const [values, setValues] = useState(initValues);

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
    startDate,
    endDate,
  } = values;

  /** input, selectbox, radiobox Change 함수 */
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
    const { checked, value, name } = e.target;

    setValues((values) => ({
      ...values,
      [name]: checked
        ? values[name].concat(value)
        : values[name].filter((val: string) => val !== value),
    }));
  }, []);

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      setValues((values) => ({
        ...values,
        [name]: date,
      }));
    },
    []
  );

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(values);
    },
    [values]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Select
          data={data}
          value={selectValue1}
          defVal={defVal}
          name="selectValue1"
          variant="outline"
          label="select1"
          width="30%"
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
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue1}
          name="inputValue1"
          variant="outline"
          label="input1"
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue2}
          name="inputValue2"
          variant="outline"
          label="input2"
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue3}
          name="inputValue3"
          variant="underline"
          label="input3"
          width="30%"
          onChange={onChange}
        />
        <br />
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          name="startDate"
          width="30%"
        />
        <br />
        <DatePicker
          selected={endDate}
          onChange={onChangeDate}
          name="endDate"
          width="30%"
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
          defVal={{ code: '', name: '선택없음' }}
          onChange={onChange}
        />
        <br />
        <Button>버튼</Button>
      </form>
    </div>
  );
};

/**
 * useChange Custom hook 사용
 */
export const useCustomHookSample = () => {
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

  const [inputForm, onChange, resetInput] = useChange({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    selectValue1: '',
    selectValue2: '',
    radioValue1: '',
    radioValue2: '',
  });

  const [dateForm, onChangeDate, resetDate] = useChangeDate({
    startDate: '',
    endDate: '',
  });

  const [checkForm, onChangeCheck, resetCheck] = useChangeCheck({
    checkValue1: [],
    checkValue2: [],
  });

  const {
    inputValue1,
    inputValue2,
    inputValue3,
    selectValue1,
    selectValue2,
    radioValue1,
    radioValue2,
  } = inputForm;

  const { startDate, endDate } = dateForm;
  const { checkValue1, checkValue2 } = checkForm;

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const transDateForm = DateUtil.mapDateString(dateForm);

      console.log({ ...inputForm, ...transDateForm, ...checkForm });
    },
    [inputForm, dateForm, checkForm]
  );

  const onReset = useCallback(() => {
    resetInput();
    resetDate();
    resetCheck();
  }, [resetInput, resetDate, resetCheck]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Select
          data={data}
          value={selectValue1}
          defVal={defVal}
          name="selectValue1"
          variant="outline"
          label="select1"
          width="30%"
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
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue1}
          name="inputValue1"
          variant="outline"
          label="input1"
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue2}
          name="inputValue2"
          variant="outline"
          label="input2"
          width="30%"
          onChange={onChange}
        />
        <br />
        <Input
          value={inputValue3}
          name="inputValue3"
          variant="underline"
          label="input3"
          width="30%"
          onChange={onChange}
        />
        <br />
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          name="startDate"
          width="30%"
        />
        <br />
        <DatePicker
          selected={endDate}
          onChange={onChangeDate}
          name="endDate"
          width="30%"
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
          defVal={{ code: '', name: '선택없음' }}
          onChange={onChange}
        />
        <br />
        <ButtonGroup>
          <Button>버튼</Button>
          <Button variant="text" onClick={onReset} type="reset">
            초기화
          </Button>
          <Button variant="outline" type="reset">
            그냥 버튼
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};
