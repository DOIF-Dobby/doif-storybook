/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Tab from './Tab';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Color from '../styles/colors/Color';
import { ChangeEvent, useCallback, useState } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default {
  title: 'components/Tab',
  component: Tab,
  decorators: [withKnobs],
};

export const tab = () => {
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
    Color.VIOLET,
  );

  const tabs = [
    {
      id: 'TAB1',
      name: 'TAB 01',
      content: (
        <div>
          <Input width="30%" variant="outline" label="Name" />
          <br />
          <ButtonGroup>
            <Button>Button</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      id: 'TAB2',
      name: 'TAB 02',
      content: (
        <div>
          <Input width="30%" variant="underline" label="Name" />
          <br />
          <ButtonGroup>
            <Button>Button</Button>
            <Button variant="text">Button</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      id: 'TAB3',
      name: 'TAB 03',
      content: <div>TAB 03</div>,
    },
  ];

  const [selected, setSelected] = useState('TAB1');

  const onChangeTab = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <div css={{ background: '#f1f3f5', padding: '20px' }}>
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab"
        color={color}
        onChange={onChangeTab}
      />
    </div>
  );
};

tab.story = {
  name: 'Default',
};
