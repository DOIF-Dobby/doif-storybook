import basicTheme from './basicTheme';

export type ThemeProps = {
  name: string;
  button: ButtonThemeProps;
  dialog: DialogProps;
};

export type ButtonThemeProps = {
  primary: ButtonProps;
  secondary: ButtonProps;
  tertiary?: ButtonProps;
};

export type ButtonProps = {
  font: string;
  base: string;
  hover: string;
  active: string;
  disable: string;
};

export type DialogProps = {
  base: string;
  title: string;
  description: string;
};

export const theme: ThemeProps = basicTheme;
