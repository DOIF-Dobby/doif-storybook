import styled from '@emotion/styled';
import React, { RefObject, useCallback, useRef, useState } from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import Input from '../Input/Input';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  /** select box의 모양을 설정합니다. */
  variant: 'basic' | 'underline' | 'outline';
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
  /** select box의 초기값을 설정합니다. 없으면 첫번째 값이 선택 됩니다. */
  initVal?: string;
}

interface StyledSelectProps {
  width?: string | number;
  color: Color;
  number: number;
}

interface SelectedProps {
  code: string | undefined;
  name: string | undefined;
}

/**
 * `Select` 컴포넌트는 특정 값을 선택할 때 사용합니다.
 */
function Select(props: SelectProps) {
  const defVal = props.defVal;
  const initVal = props.initVal;
  const newProps = Object.assign({}, props);

  delete newProps.defVal;
  delete newProps.initVal;

  const initData: Array<SelectedProps> = defVal
    ? [defVal, ...props.data]
    : props.data;

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(initData);
  const [selected, setSelected] = useState<SelectedProps>(() => {
    if (data.length === 0) {
      return {
        code: '',
        name: '데이터 없음',
      };
    }

    if (initVal) {
      const val = data.find((d) => d.code === initVal);
      return val ? val : data[0];
    }

    return data[0];
  });

  const hide = useCallback(() => setIsVisible(false), []);

  const wrapperRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(wrapperRef, hide);

  const selectRef: RefObject<HTMLSelectElement> = useRef(null);

  const onClick = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const onSelect = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { code, name } = e.currentTarget.dataset;
      setSelected({
        code,
        name,
      });
      setIsVisible(false);

      if (selectRef && selectRef.current) {
        selectRef.current.value = code || '';
        selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
    },
    []
  );

  return (
    <StyledSelect
      ref={wrapperRef}
      width={props.width ? props.width : '100%'}
      color={props.color}
      number={props.color === Color.GRAY ? 7 : 5}>
      <Input
        variant={props.variant}
        label={props.label}
        color={props.color}
        onClick={onClick}
        value={selected.name}
        isSelect
        readOnly
      />
      {isVisible && (
        <div className="list-wrapper">
          {data.length > 0 && (
            <div className="seach-wrapper">
              <input type="text" placeholder="Search..." />
            </div>
          )}
          <ul>
            {data.map((d) => (
              <li
                key={d.code}
                data-code={d.code}
                data-name={d.name}
                onClick={onSelect}
                className={d.code === selected.code ? 'selected' : ''}>
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

  & > .list-wrapper {
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
    border-radius: 4px;

    & > .seach-wrapper > input {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      border-radius: 4px;
      background-color: ${palette.gray[0]};
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
};

export default Select;
