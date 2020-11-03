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
import Form from '../Form/Form';
import Row from '../Form/Row';
import Column from '../Form/Column';
import Label from '../Form/Label';
import Field from '../Form/Field';
import Modal from '../Modal/Modal';
import Sample from './Sample';
import useChange from '../hooks/useChange';
import useChangeDate from '../hooks/useChangeDate';
import useChangeCheck from '../hooks/useChangeCheck';
import DoifUtil from '../libs/DoifUtil';

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
    [],
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
    [],
  );

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(values);
    },
    [values],
  );

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Column>
            <Label>Select 1</Label>
            <Field>
              <Select
                data={data}
                value={selectValue1}
                defVal={defVal}
                name="selectValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
          <Column>
            <Label>Select 2</Label>
            <Field>
              <Select
                data={data}
                value={selectValue2}
                defVal={defVal}
                name="selectValue2"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Input 1</Label>
            <Field>
              <Input
                value={inputValue1}
                name="inputValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
          <Column>
            <Label>Input 2</Label>
            <Field>
              <Input
                value={inputValue2}
                name="inputValue2"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column width="50%">
            <Label>Input 3</Label>
            <Field>
              <Input
                value={inputValue3}
                name="inputValue3"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>DatePicker 1</Label>
            <Field>
              <DatePicker
                selected={startDate}
                onChange={onChangeDate}
                name="startDate"
              />
            </Field>
          </Column>
          <Column>
            <Label>DatePicker 2</Label>
            <Field>
              <DatePicker
                selected={endDate}
                onChange={onChangeDate}
                name="endDate"
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Check 1</Label>
            <Field>
              <Check
                data={data}
                value={checkValue1}
                name="checkValue1"
                onChange={onChangeCheck}
              />
            </Field>
          </Column>
          <Column>
            <Label>Check 2</Label>
            <Field>
              <Check
                data={data}
                value={checkValue2}
                name="checkValue2"
                onChange={onChangeCheck}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Radio 1</Label>
            <Field>
              <Radio
                data={data}
                value={radioValue1}
                name="radioValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Radio 2</Label>
            <Field>
              <Radio
                data={data}
                value={radioValue2}
                name="radioValue2"
                defVal={{ code: '', name: '선택없음' }}
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <ButtonGroup align="center">
            <Button type="submit">버튼</Button>
          </ButtonGroup>
        </Row>
      </Form>
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
    startDate: null,
    endDate: null,
    month: null,
    time: null,
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

  const { startDate, endDate, month, time } = dateForm;
  const { checkValue1, checkValue2 } = checkForm;

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const transDateForm = DoifUtil.mapDateString(dateForm);

      console.log({ ...inputForm, ...transDateForm, ...checkForm });
    },
    [inputForm, dateForm, checkForm],
  );

  const onReset = useCallback(() => {
    resetInput();
    resetDate();
    resetCheck();
  }, [resetInput, resetDate, resetCheck]);

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Column>
            <Label>Select 1</Label>
            <Field>
              <Select
                data={data}
                value={selectValue1}
                defVal={defVal}
                name="selectValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
          <Column>
            <Label>Select 2</Label>
            <Field>
              <Select
                data={data}
                value={selectValue2}
                defVal={defVal}
                name="selectValue2"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Input 1</Label>
            <Field>
              <Input
                value={inputValue1}
                name="inputValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
          <Column>
            <Label>Input 2</Label>
            <Field>
              <Input
                value={inputValue2}
                name="inputValue2"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column width="50%">
            <Label>Input 3</Label>
            <Field>
              <Input
                value={inputValue3}
                name="inputValue3"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>DatePicker 1</Label>
            <Field>
              <DatePicker
                selected={startDate}
                onChange={onChangeDate}
                name="startDate"
              />
            </Field>
          </Column>
          <Column>
            <Label>DatePicker 2</Label>
            <Field>
              <DatePicker
                selected={endDate}
                onChange={onChangeDate}
                name="endDate"
                showTimeSelect
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>MonthPicker</Label>
            <Field>
              <DatePicker
                selected={month}
                onChange={onChangeDate}
                name="month"
                showMonthYearPicker
              />
            </Field>
          </Column>
          <Column>
            <Label>MonthPicker</Label>
            <Field>
              <DatePicker
                selected={time}
                onChange={onChangeDate}
                name="time"
                showTimeSelect
                showTimeSelectOnly
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Check 1</Label>
            <Field>
              <Check
                data={data}
                value={checkValue1}
                name="checkValue1"
                onChange={onChangeCheck}
              />
            </Field>
          </Column>
          <Column>
            <Label>Check 2</Label>
            <Field>
              <Check
                data={data}
                value={checkValue2}
                name="checkValue2"
                onChange={onChangeCheck}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Radio 1</Label>
            <Field>
              <Radio
                data={data}
                value={radioValue1}
                name="radioValue1"
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Radio 2</Label>
            <Field>
              <Radio
                data={data}
                value={radioValue2}
                name="radioValue2"
                defVal={{ code: '', name: '선택없음' }}
                onChange={onChange}
              />
            </Field>
          </Column>
        </Row>
        <Row>
          <ButtonGroup align="center">
            <Button type="submit">버튼</Button>
            <Button variant="text" onClick={onReset}>
              초기화
            </Button>
            <Button variant="outline">그냥 버튼</Button>
          </ButtonGroup>
        </Row>
      </Form>
    </div>
  );
};

/**
 * Dialog 안에 Form
 */
export const DialogForm = () => {
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

  const [visible, setVisible] = useState(false);

  const onModalOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const onModalClose = useCallback(() => {
    setVisible(false);
  }, []);

  const [inputForm, onChange, resetInput] = useChange({
    inputValue1: '',
    inputValue2: '',
    selectValue1: '',
    radioValue2: '',
  });

  const [dateForm, onChangeDate, resetDate] = useChangeDate({
    startDate: null,
  });

  const [checkForm, onChangeCheck, resetCheck] = useChangeCheck({
    checkValue1: [],
  });

  const { inputValue1, inputValue2, selectValue1, radioValue2 } = inputForm;

  const { startDate } = dateForm;
  const { checkValue1 } = checkForm;

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const transDateForm = DoifUtil.mapDateString(dateForm);

      console.log({ ...inputForm, ...transDateForm, ...checkForm });
    },
    [inputForm, dateForm, checkForm],
  );

  return (
    <div>
      <Button onClick={onModalOpen}>Dialog Open</Button>
      <Modal visible={visible} title="가맹점 정보 등록">
        <div>
          <Form onSubmit={onSubmit}>
            <Row>
              <Column>
                <Label>Select 1</Label>
                <Field>
                  <Select
                    data={data}
                    value={selectValue1}
                    defVal={defVal}
                    name="selectValue1"
                    onChange={onChange}
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Input 1</Label>
                <Field>
                  <Input
                    value={inputValue1}
                    name="inputValue1"
                    onChange={onChange}
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Input 3</Label>
                <Field>
                  <Input
                    value={inputValue2}
                    name="inputValue2"
                    onChange={onChange}
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>DatePicker 1</Label>
                <Field>
                  <DatePicker
                    selected={startDate}
                    onChange={onChangeDate}
                    name="startDate"
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Check 1</Label>
                <Field>
                  <Check
                    data={data}
                    value={checkValue1}
                    name="checkValue1"
                    onChange={onChangeCheck}
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Radio 2</Label>
                <Field>
                  <Radio
                    data={data}
                    value={radioValue2}
                    name="radioValue2"
                    defVal={{ code: '', name: '선택없음' }}
                    onChange={onChange}
                  />
                </Field>
              </Column>
            </Row>
            <Row>
              <ButtonGroup align="center">
                <Button type="submit">확인</Button>
                <Button variant="text" onClick={onModalClose}>
                  닫기
                </Button>
              </ButtonGroup>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
