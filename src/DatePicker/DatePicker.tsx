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
  /** datepicker의 넓이를 설정합니다. */
  width?: number | string;
  /**
   * onChange 함수의 첫번째 parameter는 `Date` 형식
   * */
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any> | undefined,
    name?: string
  ) => void;
}

interface DatePickerContainerProps {
  width?: number | string;
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

  const dateFormat = props.dateFormat
    ? props.dateFormat
    : props.showMonthYearPicker
    ? 'yyyy-MM'
    : 'yyyy-MM-dd';

  return (
    <DatePickerContainer width={props.width ? props.width : '100%'}>
      <ReactDatePicker
        {...props}
        onChange={nameOnChange}
        dateFormat={dateFormat}
        locale={props.locale ? props.locale : 'ko'}
        customInput={props.customInput ? props.customInput : <DefaultInput />}
        className="custom-date-picker"
        calendarClassName="custom-calendar"
        wrapperClassName="custom-wrapper"
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
          increaseYear,
          decreaseYear,
        }) => (
          <CustomHeader>
            <Button
              variant="text"
              color={Color.GRAY}
              size="small"
              onClick={props.showMonthYearPicker ? decreaseYear : decreaseMonth}
              disabled={
                props.showMonthYearPicker
                  ? prevYearButtonDisabled
                  : prevMonthButtonDisabled
              }
              iconOnly
              type="reset">
              <Icon icon="leftArrow" />
            </Button>

            <div className="month-day">
              {props.showMonthYearPicker
                ? getYear(date)
                : `${getYear(date)}.${getMonth(date) + 1} `}
            </div>

            <Button
              variant="text"
              color={Color.GRAY}
              size="small"
              onClick={props.showMonthYearPicker ? increaseYear : increaseMonth}
              disabled={
                props.showMonthYearPicker
                  ? nextYearButtonDisabled
                  : nextMonthButtonDisabled
              }
              iconOnly
              type="reset">
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
  /* background: ${palette.gray[7]}; */
  color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  & > div.month-day {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const DatePickerContainer = styled.div`
  /** wrapper class */
  & .custom-wrapper {
    display: block;

    .react-datepicker__input-container {
      & > div {
        width: ${(props: DatePickerContainerProps) => props.width};
      }
    }
  }

  & .custom-calendar {
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);

    /** picker 열면 보이는 삼각형  */
    .react-datepicker__triangle {
      border-bottom-color: #fff;
      left: 3rem !important;

      /** 삼각형 border */
      &::before {
        border-bottom-color: rgba(100, 100, 100, 0.2);
        filter: blur(2px);
      }
    }

    .react-datepicker__day-names {
      background-color: #fff;

      .react-datepicker__day-name {
        color: ${palette.gray[7]};
        font-weight: 600;
      }

      /** 일요일 */
      .react-datepicker__day-name:first-of-type {
        color: ${palette.red[6]};
      }
    }

    /** 헤더 */
    .react-datepicker__header {
      border-bottom: none;
    }

    /** 커스텀 헤더 */
    .react-datepicker__header--custom {
      background-color: #fff;
    }

    /** 안에 날짜들 */
    .react-datepicker__week {
      /** hover 시 */
      & > div:hover {
        background-color: ${palette.gray[1]};
      }

      .react-datepicker__day {
        color: ${palette.gray[7]};
      }

      /** 일요일 빨간색 (선택된 날짜 빼고, 선택 못하는 날짜 뺴고) */
      .react-datepicker__day--weekend:first-of-type:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled) {
        color: ${palette.red[6]};
      }

      /** 선택 된 날 */
      .react-datepicker__day--selected {
        background-color: ${palette.gray[7]};
        color: #fff;

        &:hover {
          background-color: ${palette.gray[7]};
        }
      }

      /** picker 달 이동시 선택된 날짜와 같은 날 */
      .react-datepicker__day--keyboard-selected {
        background-color: #fff;
      }

      /** 선택불가능한 날짜 */
      .react-datepicker__day--disabled {
        color: ${palette.gray[5]};

        &:hover {
          background-color: #fff;
        }
      }
    }

    /** Month Picker */
    .react-datepicker__month-wrapper {
      & > div {
        height: 2rem;
        line-height: 2rem;
        color: ${palette.gray[7]};

        /** hover 시 */
        &:hover {
          background-color: ${palette.gray[1]};
        }
      }

      /** picker 달 이동시 선택된 날짜와 같은 날 */
      .react-datepicker__month-text--keyboard-selected {
        background-color: #fff;
        color: ${palette.gray[7]};
      }

      /** 선택된 날 */
      .react-datepicker__month--selected {
        background-color: ${palette.gray[7]};
        color: #fff;

        &:hover {
          background-color: ${palette.gray[7]};
        }
      }

      /** 선택불가능한 날 */
      .react-datepicker__month--disabled {
        color: ${palette.gray[5]};

        &:hover {
          background-color: #fff;
        }
      }
    }
  }
`;

export default DatePicker;
