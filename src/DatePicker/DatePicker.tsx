/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef, memo } from 'react';
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input/Input';
import Color from '../styles/colors/Color';
import Icon from '../Icon/Icon';

interface DatePickerProps extends ReactDatePickerProps {}

/**
 * `DatePicker` 컴포넌트는 날짜 혹은 시간을 선택할 때 사용합니다.
 */
function DatePicker(props: DatePickerProps) {
  registerLocale('ko', ko);
  return (
    <ReactDatePicker
      {...props}
      locale="ko"
      customInput={props.customInput ? props.customInput : <DefaultInput />}
    />
  );
}

const DefaultInput = forwardRef((props, ref) => (
  <Input {...props} icon={<Icon icon="calendar" />} />
));

DatePicker.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
};

export default memo(DatePicker);
