/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RippleButton from './RippleButton';

export default {
  title: 'components/RippleButton',
  component: RippleButton,
};

export const rippleButton = () => {
  return <RippleButton>안녕하세요</RippleButton>;
};

rippleButton.story = {
  name: 'Default',
};
