/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Form from './Form';
import Row from './Row';
import Column from './Column';
import Label from './Label';
import Field from './Field';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'components/Form',
  component: Form,
  decorators: [withKnobs],
};

export const form = () => {
  return (
    <Form>
      <Row>
        <Column>
          <Label>라벨</Label>
          <Field>안녕하세요</Field>
        </Column>
        <Column>
          <Label>라벨</Label>
          <Field>안녕하세요</Field>
        </Column>
      </Row>
    </Form>
  );
};
