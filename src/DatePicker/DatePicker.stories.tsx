/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef, useCallback, useState } from 'react';
import Color from '../styles/colors/Color';
import DatePicker from './DatePicker';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
};

const wrapperStyle = css`
  height: 300px;
`;

export const datePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  return (
    <div css={wrapperStyle}>
      <DatePicker selected={startDate} onChange={onChange} />
    </div>
  );
};

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

datePicker.story = {
  name: 'Default',
};
