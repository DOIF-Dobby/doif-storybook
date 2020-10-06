/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

interface CheckProps {
  /** check box의 data를 설정합니다. */
  data: Array<CheckedProps>;
  /** check box의 checked를 설정합니다. */
  value: string[];
  /** check box의 이름을 설정합니다. */
  name?: string;
  /** check box의 색을 정합니다. */
  color: Color;
  /** check box를 비활성화 시킵니다. */
  disabled: boolean;
  /** check box를 변경했을 때 트리거되는 함수입니다. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StyledCheckProps {
  color: Color;
  number: number;
  disabled: boolean;
}

interface CheckedProps {
  code: string;
  name: string;
}

/**
 * `Check` 컴포넌트는 여러 개의 값을 선택할 때 사용합니다.
 */
function Check(props: CheckProps) {
  return (
    <StyledCheck
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
      disabled={props.disabled}
    >
      {props.data.map((d) => {
        const isChecked = props.value.includes(d.code);

        return (
          <label key={d.code}>
            <input
              type="checkbox"
              name={props.name}
              checked={isChecked}
              data-code={d.code}
              disabled={props.disabled}
              onChange={props.onChange}
            />
            <div className={`checkbox ${isChecked && 'checked'}`}>
              <div className={isChecked ? 'checked' : ''}></div>
            </div>
            <span>{d.name}</span>
          </label>
        );
      })}
    </StyledCheck>
  );
}

Check.defaultProps = {
  color: Color.VIOLET,
  disabled: false,
};

const StyledCheck = styled.div`
  display: flex;

  & > label {
    display: flex;
    justify-content: left;
    align-items: center;
    width: fit-content;
    margin-right: 0.5rem;

    &:hover {
      ${(props: StyledCheckProps) => !props.disabled && `cursor: pointer`};
    }

    & > input[type='checkbox'] {
      display: none;
    }

    & > div.checkbox {
      border: ${(props: StyledCheckProps) =>
        `2px solid ${props.disabled ? palette.gray[5] : palette.gray[7]}`};
      border-radius: 4px;
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.3rem;
      position: relative;

      &.checked {
        background: ${(props: StyledCheckProps) =>
          props.disabled
            ? palette.gray[5]
            : palette[props.color][props.number]};
        border: none;
      }

      & > div.checked {
        position: absolute;
        top: 0.2rem;
        left: 0.25rem;
        border-left: 0.2rem solid #fff;
        border-bottom: 0.2rem solid #fff;

        width: 0.7rem;
        height: 0.5rem;

        transform: rotate(-45deg);
      }
    }

    & > span {
      line-height: 1.2rem;
      ${(props: StyledCheckProps) =>
        props.disabled && `color: ${palette.gray[5]}`};
    }
  }
`;

export default Check;
