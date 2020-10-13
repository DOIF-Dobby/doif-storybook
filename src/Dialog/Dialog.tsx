/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import palette from '../styles/colors/palette';
import DarkLayer from '../DarkLayer/DarkLayer';

export interface DialogProps {
  /** `true`: 화면에 나타남, `false`: 화면에서 사라짐  */
  visible: boolean;
  /** Dialog 상단에 표시되는 글자 */
  title?: string;
  /** title 밑에 나타나는 글자 */
  description?: string;
  /** Dialog에 넣을 커스텀한 ReactNode */
  children?: React.ReactNode;
  /** `true`: 버튼을 숨김, `false`: 버튼을 보여줌 */
  hideButtons?: boolean;
  /** `true`: 취소 버튼을 보여줌, `false`: 취소 버튼을 보여주지 않음   */
  cancellable?: boolean;
  /** 취소 버튼 텍스트명 */
  cancelText: string;
  /** 확인 버튼 텍스트명 */
  confirmText: string;
  /** 취소 버튼 클릭 시 실행할 함수 */
  onCancel?: () => void;
  /** 확인 버튼 클릭 시 실행할 함수*/
  onConfirm?: () => void;
}

/**
 * `Dialog` 컴포넌트는 메시지를 띄울 때 사용합니다.
 */
function Dialog({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: DialogProps) {
  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      {/* <div css={[fullscreen, darkLayer]}></div> */}
      <DarkLayer />
      <div css={[fullscreen, whiteBoxWrapper]}>
        <div css={whiteBox}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <ButtonGroup css={{ marginTop: '3rem' }} align="right">
              {cancellable && (
                <Button onClick={onCancel} variant="text">
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </Fragment>
  );
}

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 1010;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background-color: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: ${palette.gray[7]};
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: ${palette.gray[7]};
  }
`;

export default Dialog;
