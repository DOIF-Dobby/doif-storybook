/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef, SyntheticEvent } from 'react';
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.min.css';
import Input from '../Input/Input';
import Color from '../styles/colors/Color';
import Icon from '../Icon/Icon';
import moment from 'moment';
import { getMonth, getYear } from 'date-fns';
import Button from '../Button/Button';
import styled from '@emotion/styled';

interface DatePickerProps extends ReactDatePickerProps {
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any> | undefined,
    name?: string
  ) => void;
}

registerLocale('ko', ko);

/**
 * `DatePicker` 컴포넌트는 날짜 혹은 시간을 선택할 때 사용합니다.
 * https://reactdatepicker.com/ 더 자세한 사용법은 여기를 참조하세요
 */
function DatePicker(props: DatePickerProps) {
  const nameOnChange = (
    date: Date | null,
    event: SyntheticEvent<HTMLInputElement> | undefined
  ) => {
    props.onChange(date, event, props.name);
  };

  return (
    <div>
      <ReactDatePicker
        {...props}
        selected={props.value ? new Date(props.value) : props.selected}
        onChange={nameOnChange}
        dateFormat="yyyy-MM-dd"
        locale="ko"
        customInput={props.customInput ? props.customInput : <DefaultInput />}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => (
          <CustomHeader>
            <Button
              variant="text"
              color={Color.GRAY}
              size="small"
              className="btn_month btn_month-prev"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              iconOnly
            >
              <Icon icon="leftArrow" />
            </Button>

            <div className="month-day">
              {getYear(date)}년 {getMonth(date) + 1}월
            </div>

            <Button
              variant="text"
              color={Color.GRAY}
              size="small"
              className="btn_month btn_month-next"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              iconOnly
            >
              <Icon icon="rightArrow" />
            </Button>
          </CustomHeader>
        )}
      />
    </div>
  );
}

const DefaultInput = forwardRef((props, ref) => (
  <Input {...props} autoComplete="off" icon={<Icon icon="calendar" />} />
));

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div.month-day {
    font-size: 1rem;
  }
`;

export default DatePicker;
