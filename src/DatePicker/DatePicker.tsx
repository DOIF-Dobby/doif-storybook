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
import { getMonth, getYear } from 'date-fns';
import Button from '../Button/Button';
import styled from '@emotion/styled';
import palette from '../styles/colors/palette';

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

  const date = props.value ? new Date(props.value) : props.selected;

  return (
    <DatePickerContainer>
      <ReactDatePicker
        {...props}
        selected={date}
        onChange={nameOnChange}
        dateFormat={props.dateFormat ? props.dateFormat : 'yyyy-MM-dd'}
        locale={props.locale ? props.locale : 'ko'}
        customInput={props.customInput ? props.customInput : <DefaultInput />}
        className="custom-date-picker"
        calendarClassName="custom-calendar"
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
              color={Color.WHITE}
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
              color={Color.WHITE}
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
    </DatePickerContainer>
  );
}

const DefaultInput = forwardRef((props, ref) => (
  <Input {...props} autoComplete="off" icon={<Icon icon="calendar" />} />
));

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${palette.gray[7]};
  color: #fff;

  & > div.month-day {
    font-size: 1rem;
  }
`;

const DatePickerContainer = styled.div`
  & .custom-date-picker {
    border: 3px soild blue;
  }

  & .custom-calendar {
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);

    .react-datepicker__triangle {
      border-bottom-color: ${palette.gray[7]};

      &::before {
        /* border-bottom-color: ${palette.gray[7]}; */
      }
    }
    .react-datepicker__day-names {
      background: ${palette.gray[7]};

      .react-datepicker__day-name {
        color: #fff;
      }
    }
  }
`;

export default DatePicker;
