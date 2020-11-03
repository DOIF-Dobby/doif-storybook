import styled from '@emotion/styled';
import React, { ChangeEvent, useEffect, useRef } from 'react';
import _ from 'lodash';
import Color from '../styles/colors/Color';
import palette from '../styles/colors/palette';

interface TabProps {
  /** `Tab` 컴포넌트에서 보여줄 내용입니다. `{ id:string, name: string, content: React.ReatNode }`배열입니다. */
  tabs: TabsProps[];
  /** 선택된 tab Id 입니다. */
  selected: string;
  /** 탭 그룹에 필요한 name 입니다. */
  name: string;
  /** tab의 색상을 설정합니다. */
  color: Color;
  /** Tab 변경 시 실행할 함수입니다. */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface TabsProps {
  id: string;
  name: string;
  content: React.ReactNode;
}

interface StyledTabProps {
  color: Color;
  number: number;
}

/**
 * `Tab` 컴포넌트는 여러 페이지를 한 페이지에 보여줄 때 사용합니다.
 */
function Tab(props: TabProps) {
  const idx = props.tabs.findIndex((tab) => tab.id === props.selected);

  /** indicator 동적으로 left, width 변화 */
  useEffect(() => {
    const indicator = document.getElementById(props.name + '_indicator');
    const selectedLabel = document.getElementById(
      props.name + '_tab' + props.selected,
    );

    if (indicator) {
      indicator.style.width = selectedLabel?.clientWidth + 'px';
      const slicedProps = props.tabs.slice(0, idx);
      const left = _.sumBy(slicedProps, (o) => {
        const el = document.getElementById(props.name + '_tab' + o.id);

        if (el) {
          return el.clientWidth;
        } else {
          return 0;
        }
      });

      indicator.style.left = left + 'px';
    }
  }, [props]);

  return (
    <StyledTab color={props.color} number={props.color === Color.GRAY ? 7 : 5}>
      <div className="page-name-wrapper">
        {props.tabs.map((tab) => (
          <label
            key={tab.id}
            className={tab.id === props.selected ? 'selected' : ''}
            id={props.name + '_tab' + tab.id}
          >
            <input
              type="radio"
              name={props.name}
              value={tab.id}
              checked={tab.id === props.selected}
              onChange={props.onChange}
            />
            <span>{tab.name}</span>
          </label>
        ))}
        <div className="indicator" id={props.name + '_indicator'}></div>
        <div className="baceline"></div>
      </div>

      <div className="page-content-wrapper">
        {props.tabs.map(
          (tab) =>
            tab.id === props.selected && (
              <div key={tab.id} className="page-content">
                {tab.content}
              </div>
            ),
        )}
      </div>
    </StyledTab>
  );
}

Tab.defaultProps = {
  color: Color.VIOLET,
};

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  padding: 0.5rem;

  /** name */
  .page-name-wrapper {
    display: flex;
    position: relative;

    label {
      min-width: 100px;
      padding: 0.5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      color: ${palette.gray[6]};

      /** 선택된 녀석 */
      &.selected {
        color: ${(props: StyledTabProps) => palette[props.color][props.number]};
        font-weight: 600;

        & > span {
          color: ${(props: StyledTabProps) =>
            palette[props.color][props.number]};
        }
      }

      & > input[type='radio'] {
        display: none;
      }

      &:active ~ div.indicator {
      }
    }

    .indicator {
      height: 2px;
      background-color: ${(props: StyledTabProps) =>
        palette[props.color][props.number]};
      position: absolute;
      bottom: 0;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      z-index: 10;
    }

    .baceline {
      width: 100%;
      height: 2px;
      background-color: ${palette.gray[2]};
      position: absolute;
      bottom: 0;
    }
  }

  /** content */
  .page-content-wrapper {
    padding: 1rem 0.5rem 1rem 0.5rem;
    /* border: 1px solid red; */
  }
`;

export default Tab;
