/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Modal from './Modal';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '500px',
    },
  },
  decorators: [withKnobs],
};

export const modal = () => {
  const title = text('title', '가맹점 정보 등록');
  const visible = boolean('visible', true);
  return (
    <Modal visible={visible} title={title}>
      안녕하세요
    </Modal>
  );
};

modal.story = {
  name: 'Default',
};

// export const customStyleModal = () => {
//   const customStyle = css`
//     background-color: #fab !important;
//     color: yellow;
//   `;

//   return (
//     <Modal visible title="Custom Style Modal" css={customStyle}>
//       <div>안녕하세요</div>
//     </Modal>
//   );
// };
