/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import DarkLayer from '../DarkLayer/DarkLayer';

interface ModalProps {
  /** `true`: 화면에 나타남, `false`: 화면에서 사라짐  */
  visible: boolean;
  /** Modal 상단에 표시되는 글자 */
  title?: string;
  /** Modal에 넣을 커스텀한 ReactNode */
  children?: React.ReactNode;
  /** custom style을 위한 css */
  css?: SerializedStyles;
}

/**
 * `Modal` 컴포넌트는 자유롭게 하위 컴포넌트를 구성하고 띄울 때 사용합니다.
 */
function Modal(props: ModalProps) {
  if (!props.visible) {
    return null;
  }

  return (
    <Fragment>
      <DarkLayer />
      <StyledModal>
        <div css={props.css}>
          {props.title && <div className="title">{props.title}</div>}
          {props.children}
        </div>
      </StyledModal>
    </Fragment>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1010;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
    padding: 2rem;

    & > div.title {
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Modal;
