/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';
import Color from '../styles/colors/Color';
import { useEffect, useState } from 'react';

export default {
  title: 'components/Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const variant = select('variant', ['contain', 'outline', 'text'], 'contain');
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
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <Button
      size={size}
      color={color}
      disabled={disabled}
      width={width}
      variant={variant}
      onClick={action('onClick')}>
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  & > div + div {
    margin-top: 2rem;
  }

  & > div > button {
    margin-right: 1rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
        <Button size="small" variant="outline">
          BUTTON
        </Button>
        <Button size="small" variant="text">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
        <Button size="medium" variant="outline">
          BUTTON
        </Button>
        <Button size="medium" variant="text">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
        <Button size="big" variant="outline">
          BUTTON
        </Button>
        <Button size="big" variant="text">
          BUTTON
        </Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled>SECONDARY</Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};

export const loadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  const onClick = () => {
    setIsLoading(true);
  };

  return (
    <ButtonGroup>
      <Button isLoading={isLoading} onClick={onClick}>
        Button
      </Button>
      <Button isLoading={isLoading} onClick={onClick}>
        <Icon icon="heart" /> LIKE
      </Button>
      <Button isLoading={isLoading} iconOnly onClick={onClick}>
        <Icon icon="heart" />
      </Button>
    </ButtonGroup>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <Button size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button disabled size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" disabled size="small">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button disabled>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" disabled>
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button size="big">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button disabled size="big">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" size="big">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" disabled size="big">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button>
          <Icon icon="heart" color="#ff6b6b" /> LIKE
        </Button>
        <Button disabled>
          <Icon icon="heart" color="#ff6b6b" /> LIKE
        </Button>
        <Button variant="text">
          <Icon icon="heart" color="#ff6b6b" /> LIKE
        </Button>
        <Button variant="text" disabled>
          <Icon icon="heart" color="#ff6b6b" /> LIKE
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button color={Color.RED}>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button color={Color.RED} disabled>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" color={Color.RED}>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button variant="text" color={Color.RED} disabled>
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const iconOnly = () => {
  return (
    <div>
      <ButtonGroup>
        <Button iconOnly size="small">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled size="small">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly size="small">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled size="small">
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled>
          <Icon icon="heart" />
        </Button>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled>
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button iconOnly size="big">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled size="big">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly size="big">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly disabled size="big">
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

const colorsArray: Array<Color> = [];

for (const value in Color) {
  colorsArray.push(Color[value]);
}

export const colorButton = () => {
  return (
    <div>
      {colorsArray &&
        colorsArray.map((color, i) => (
          <div key={i}>
            <div css={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>
              {color}
            </div>
            <ButtonGroup>
              <Button color={color}>Button</Button>
              <Button color={color} disabled>
                Button
              </Button>
              <Button color={color} variant="outline">
                Button
              </Button>
              <Button color={color} variant="outline" disabled>
                Button
              </Button>
              <Button color={color} variant="text">
                Button
              </Button>
              <Button color={color} variant="text" disabled>
                Button
              </Button>
            </ButtonGroup>
            <br />
          </div>
        ))}
    </div>
  );
};
