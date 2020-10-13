import React from 'react';
import {
  withKnobs,
  text,
  radios,
  boolean,
  select,
} from '@storybook/addon-knobs';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import Color from '../styles/colors/Color';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    'directoin',
    { Row: 'row', Column: 'column' },
    'row',
  );
  const align = select('align', ['left', 'center', 'right'], 'left');
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} align={align} gap={gap}>
      <Button variant="text">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const align = () => {
  return (
    <div>
      <ButtonGroup align="right">
        <Button>조회</Button>
        <Button variant="outline">다운로드</Button>
      </ButtonGroup>
      <ButtonGroup align="center">
        <Button>확인</Button>
        <Button variant="outline">닫기</Button>
      </ButtonGroup>
    </div>
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
      <Button color={Color.TEAL}>취소</Button>
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
