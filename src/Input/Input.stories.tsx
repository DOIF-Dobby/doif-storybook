/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Input from './Input';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';
import Color from '../styles/colors/Color';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export default {
  title: 'components/Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const label = text('label', 'Name');
  const variant = select('variant', ['basic', 'underline', 'outline'], 'basic');
  const color = select(
    'color',
    [
      Color.WHITE,
      Color.BLACK,
      Color.GRAY,
      Color.PINK,
      Color.VIOLET,
      Color.BLUE,
      Color.TEAL,
      Color.LIME,
      Color.ORANGE,
      Color.RED,
      Color.GRAPE,
      Color.INDIGO,
      Color.CYAN,
      Color.GREEN,
      Color.YELLOW,
    ],
    Color.VIOLET
  );

  return (
    <Input
      variant={variant}
      label={label}
      color={color}
      value={value}
      onChange={onChange}
    />
  );
};

input.story = {
  name: 'Default',
};

export const underlineInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <Input variant="underline" label="Name" value={value} onChange={onChange} />
  );
};

export const outlineInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <Input variant="outline" label="Name" value={value} onChange={onChange} />
  );
};

export const customWidth = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <Input width="50%" value={value} onChange={onChange} />
      <br />
      <Input
        variant="underline"
        label="Name"
        width="50%"
        value={value}
        onChange={onChange}
      />
      <br />
      <Input
        variant="outline"
        label="Name"
        width="50%"
        value={value}
        onChange={onChange}
      />
      <br />
      <Input width="250px" value={value} onChange={onChange} />
      <br />
      <Input
        variant="underline"
        label="Name"
        width="250px"
        color={Color.TEAL}
        value={value}
        onChange={onChange}
      />
      <br />
      <Input
        variant="outline"
        label="Name"
        width="250px"
        color={Color.GRAY}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const disabledInput = () => {
  return (
    <div>
      <Input label="disabled" disabled />
      <br />
      <Input variant="outline" label="disabled" disabled />
      <br />
      <Input variant="underline" label="disabled" disabled />
    </div>
  );
};

export const otherTypeInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <div>
      <Input
        variant="underline"
        label="Name"
        value={value}
        onChange={onChange}
        type="password"
      />
      <br />

      <Input variant="outline" type="file" />
    </div>
  );
};

export const uncontrolledInput = () => {
  return <Input variant="outline" label="Uncontrolled" />;
};

export const testInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onInput = () => {
    console.log('onInput test');
  };

  const onFocus = () => {
    console.log('onFocus test');
  };

  return (
    <Input
      variant="outline"
      onChange={onChange}
      value={value}
      label="onInput, onFocus"
      onInput={onInput}
      onFocus={onFocus}
    />
  );
};
