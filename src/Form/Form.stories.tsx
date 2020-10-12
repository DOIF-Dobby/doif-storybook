/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Form from './Form';
import Row from './Row';
import Column from './Column';
import Label from './Label';
import Field from './Field';
import Input from '../Input/Input';
import Select from '../Select/Select';
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
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
    </Form>
  );
};

form.story = {
  name: 'Default',
};

export const requiredLabel = () => {
  return (
    <Form>
      <Row>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
    </Form>
  );
};

export const customWidthColumn = () => {
  return (
    <Form>
      <Row>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label required>Required label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column width="33.33%">
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column width="66.66%">
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column width="66.66%">
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column width="33.33%">
          <Label>Label</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
    </Form>
  );
};
