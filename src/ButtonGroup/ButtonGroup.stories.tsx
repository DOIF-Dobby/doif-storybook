import React from 'react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    'directoin',
    { Row: 'row', Column: 'column' },
    'row'
  );
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
