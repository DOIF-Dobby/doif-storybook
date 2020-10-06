/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { memo } from 'react';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

interface RadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** radio box의 data를 설정합니다. */
  data: Array<CheckedProps>;
  /** radio box의 checked를 설정합니다. */
  value: string;
  /** radio box의 이름을 설정합니다. */
  name: string;
  /** radio box의 색을 정합니다. */
  color: Color;
  /** radio box를 비활성화 시킵니다. */
  disabled: boolean;
  /** radio box의 default value를 설정합니다. */
  defVal?: CheckedProps;
}

interface StyledRadioProps {
  color: Color;
  number: number;
  disabled: boolean;
}

interface CheckedProps {
  code: string;
  name: string;
}

/**
 * `Radio` 컴포넌트는 여러 개의 값들 중 하나를 선택할 때 사용합니다.
 */
function Radio(props: RadioProps) {
  const { defVal } = props;
  let value = props.value;
  const newProps = Object.assign({}, props);

  delete newProps.defVal;

  const initData: Array<CheckedProps> = defVal
    ? [defVal, ...props.data]
    : props.data;

  if (!value) {
    value = initData[0].code || '';
  }

  return (
    <StyledRadio
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      disabled={props.disabled}
    >
      {initData.map((d) => {
        const isChecked = value === d.code;

        return (
          <label key={d.code}>
            <input
              {...newProps}
              value={d.code}
              type="radio"
              checked={isChecked}
            />
            <div className={`radiobox ${isChecked && 'checked'}`}>
              <div className={isChecked ? 'checked' : ''}></div>
            </div>
            <span>{d.name}</span>
          </label>
        );
      })}
    </StyledRadio>
  );
}

Radio.defaultProps = {
  color: Color.VIOLET,
  disabled: false,
};

const StyledRadio = styled.div`
  display: flex;

  & > label {
    display: flex;
    justify-content: left;
    align-items: center;
    width: fit-content;
    margin-right: 0.5rem;

    &:hover {
      ${(props: StyledRadioProps) => !props.disabled && `cursor: pointer`};
    }

    & > input[type='radio'] {
      display: none;
    }

    & > div.radiobox {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.6rem;
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.3rem;
      position: relative;
      background: #fff;
      border: ${(props: StyledRadioProps) =>
        `2px solid ${props.disabled ? palette.gray[5] : palette.gray[7]}`};

      &.checked {
        border: ${(props: StyledRadioProps) =>
          `2px solid ${
            props.disabled
              ? palette.gray[5]
              : palette[props.color][props.number]
          }`};
      }

      & > div.checked {
        /* position: absolute; */
        background: ${(props: StyledRadioProps) =>
          props.disabled
            ? palette.gray[5]
            : palette[props.color][props.number]};
        border: none;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
      }
    }

    & > span {
      line-height: 1.2rem;
      ${(props: StyledRadioProps) =>
        props.disabled && `color: ${palette.gray[5]}`};
    }
  }
`;

export default memo(Radio);
