/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from '../Icon/Icon';
import palette from '../styles/colors/palette';

interface LabelProps {
  /** `Label` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
  /** 필수 항목 여부 */
  required: boolean;
}

/**
 * `Label` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
function Label(props: LabelProps) {
  return (
    <StyledLabel className="label">
      <div>
        <div>
          {props.required && (
            <Icon icon="check" size="0.9rem" color="#fa5252" />
          )}
        </div>
        <span>{props.children}</span>
      </div>
    </StyledLabel>
  );
}

Label.defaultProps = {
  required: false,
};

const StyledLabel = styled.div`
  width: 10rem;
  /* background-color: ${palette.gray[1]}; */
  /* border-radius: 4px; */
  /* color: #fff; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-right: 1px solid ${palette.gray[5]}; */

  & > div {
    display: flex;
    align-items: center;

    & > div {
      width: 1rem;
      padding-left: 0.3rem;
    }

    & > span {
      margin-left: 0.5rem;
    }
  }
`;

export default Label;
