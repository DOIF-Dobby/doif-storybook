/// <reference types="react" />
export declare type DialogProps = {
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
};
/**
 * `Dialog` 컴포넌트는 메시지를 띄울 때 사용합니다.
 */
declare function Dialog({ visible, title, description, hideButtons, cancellable, cancelText, confirmText, children, onCancel, onConfirm, }: DialogProps): JSX.Element | null;
declare namespace Dialog {
    var defaultProps: {
        cancelText: string;
        confirmText: string;
    };
}
export default Dialog;
