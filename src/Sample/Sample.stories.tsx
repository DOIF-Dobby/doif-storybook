/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import Button from '../Button/Button';
import Check from '../Check/Check';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Sample from './Sample';
import moment from 'moment';

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
        [name]: moment(date).format('YYYY-MM-DD'),
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
          value={startDate}
          onChange={onChangeDate}
          name="startDate"
        />
        <br />
        <DatePicker value={endDate} onChange={onChangeDate} name="endDate" />
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
