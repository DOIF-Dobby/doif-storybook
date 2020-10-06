import styled from '@emotion/styled';
import React, {
  ChangeEvent,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import Input from '../Input/Input';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';
import _ from 'lodash';
import { css } from '@emotion/core';
import Icon from '../Icon/Icon';

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  /** select box의 모양을 설정합니다. */
  variant: 'basic' | 'underline' | 'outline';
  /** select box의 값을 설정합니다. */
  value: string;
  /** label을 설정합니다. `variant`가 `underline`이나 `outline`일 경우 필수로 넣어야합니다.*/
  label?: string;
  /** select box의 색을 정합니다. */
  color: Color;
  /** select의 넓이를 설정합니다. */
  width?: string | number;
  /** select box의 data를 설정합니다. */
  data: Array<SelectedProps>;
  /** select box의 default value를 설정합니다. */
  defVal?: SelectedProps;
  /** select box의 높이를 설정합니다. */
  height: string | number;
  /** select box를 비활성화 시킵니다. */
  disabled: boolean;
}

interface StyledSelectProps {
  width?: string | number;
  height?: string | number;
  color: Color;
  number: number;
}

interface SelectedProps {
  code: string;
  name: string;
}

/**
 * `Select` 컴포넌트는 특정 값을 선택할 때 사용합니다.
 */
function Select(props: SelectProps) {
  const { defVal } = props;
  let value = props.value;
  const newProps = Object.assign({}, props);

  delete newProps.defVal;

  const initData: Array<SelectedProps> = defVal
    ? [defVal, ...props.data]
    : props.data;

  if (!value) {
    value = initData[0].code || '';
  }

  const codeName = initData.find((d) => d.code === value)?.name;

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(initData);
  const [searchValue, setSearchValue] = useState('');

  const hide = useCallback(() => setIsVisible(false), []);

  const wrapperRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(wrapperRef, hide);

  const selectRef: RefObject<HTMLSelectElement> = useRef(null);

  const onClick = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const onSelect = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { code } = e.currentTarget.dataset;
      setIsVisible(false);

      if (selectRef && selectRef.current) {
        selectRef.current.value = code || '';
        selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
    },
    []
  );

  const onDebounceChangeData = _.debounce((target: HTMLInputElement) => {
    setData(
      data.filter((d) =>
        d.name.toUpperCase().includes(target.value.toUpperCase())
      )
    );
  }, 200);

  const onChangeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onDebounceChangeData(e.target);
  }, []);

  const selectInputStyle = css`
    cursor: pointer;

    & ~ div.icon-wrapper {
      cursor: pointer;
    }
  `;

  return (
    <StyledSelect
      ref={wrapperRef}
      width={props.width ? props.width : '100%'}
      height={props.height}
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}
    >
      <Input
        variant={props.variant}
        label={props.label}
        color={props.color}
        onClick={onClick}
        value={codeName}
        readOnly
        disabled={props.disabled}
        css={selectInputStyle}
        icon={<Icon icon="downArrow" />}
      />
      {isVisible && (
        <div className="list-wrapper">
          <div className="seach-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={onChangeData}
            />
          </div>
          <ul>
            {data.map((d) => (
              <li
                key={d.code}
                data-code={d.code}
                onClick={onSelect}
                className={d.code === value ? 'selected' : ''}
              >
                {d.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <select {...newProps} ref={selectRef}>
        {data.map((d) => (
          <option key={d.code} value={d.code}>
            {d.name}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
}

const StyledSelect = styled.div`
  position: relative;
  width: ${(props: StyledSelectProps) => props.width};

  & > select {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  & > .list-wrapper {
    position: absolute;
    z-index: 100;
    width: 100%;
    max-height: ${(props: StyledSelectProps) => props.height};
    overflow: auto;
    background: #fff;
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
    border-radius: 4px;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${palette.gray[6]};
    }

    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    & > .seach-wrapper {
      & > input {
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        background-color: ${palette.gray[0]};
      }
    }

    & > ul {
      list-style: none;
      padding-left: 0;
      margin: 0;

      & > li {
        padding: 0.5rem;
        font-size: 0.9rem;
      }

      & > li.selected {
        color: ${(props: StyledSelectProps) =>
          palette[props.color][props.number]};
        font-weight: 600;
      }

      & > li:hover {
        background: ${palette.gray[1]};
        cursor: pointer;
      }
    }
  }
`;

Select.defaultProps = {
  variant: 'basic',
  color: Color.VIOLET,
  height: '250px',
  disabled: false,
};

export default Select;
