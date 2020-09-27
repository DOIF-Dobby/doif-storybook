/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import DarkLayer from './DarkLayer';

export default {
  title: 'components/DarkLayer',
  component: DarkLayer,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
    },
  },
};

export const darkLayer = () => {
  return <DarkLayer />;
};

darkLayer.story = {
  name: 'Default',
};
