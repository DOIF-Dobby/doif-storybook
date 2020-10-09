/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  ChangeEvent,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';
import DatePicker from './DatePicker';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  decorators: [withKnobs],
};

const wrapperStyle = css`
  height: 300px;
`;

/**
 * Default
 */
export const datePicker = () => {
  const width = text('width', '');

  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback((date, e: SyntheticEvent<any, Event>) => {
    setStartDate(date);
  }, []);

  return (
    <div css={wrapperStyle}>
      <DatePicker selected={startDate} onChange={onChange} width={width} />
    </div>
  );
};

datePicker.story = {
  name: 'Default',
};

/**
 * Custom Input
 */
export const customInputDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const CustomInputDatePicker = forwardRef((props, ref) => {
    const CustomInput = forwardRef((props, ref) => (
      <Input
        {...props}
        color={Color.TEAL}
        variant="underline"
        label="Custom Input"
        icon={<Icon icon="heart" />}
      />
    ));

    return (
      <DatePicker
        {...props}
        selected={startDate}
        onChange={onChange}
        customInput={<CustomInput />}
      />
    );
  });

  return (
    <div css={wrapperStyle}>
      <CustomInputDatePicker />
    </div>
  );
};

/**
 * Range Date
 */
export const rangeDatePicker = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const { startDate, endDate } = dates;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      setDates((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    []
  );

  return (
    <div css={{ display: 'flex', height: '300px' }}>
      <DatePicker
        selected={startDate}
        onChange={onChangeDate}
        maxDate={endDate}
        name="startDate"
        width="90%"
      />
      <DatePicker
        selected={endDate}
        onChange={onChangeDate}
        minDate={startDate}
        name="endDate"
        width="90%"
      />
    </div>
  );
};

/**
 * Month Picker
 */
export const monthPicker = () => {
  const [months, setMonths] = useState({
    month: new Date(),
  });

  const { month } = months;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      setMonths((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    []
  );

  return (
    <div css={wrapperStyle}>
      <DatePicker
        selected={month}
        onChange={onChangeDate}
        name="month"
        width="30%"
        showMonthYearPicker
      />
    </div>
  );
};

/**
 * Range Month Picker
 */
export const rangeMonthPicker = () => {
  const [months, setMonths] = useState({
    startMonth: new Date(),
    endMonth: new Date(),
  });

  const { startMonth, endMonth } = months;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      setMonths((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    []
  );

  return (
    <div css={{ display: 'flex', height: '300px' }}>
      <DatePicker
        selected={startMonth}
        onChange={onChangeDate}
        name="startMonth"
        width="90%"
        showMonthYearPicker
        maxDate={endMonth}
      />
      <DatePicker
        selected={endMonth}
        onChange={onChangeDate}
        name="endMonth"
        width="90%"
        showMonthYearPicker
        minDate={startMonth}
      />
    </div>
  );
};
