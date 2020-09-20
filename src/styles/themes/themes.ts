import basicTheme from './basicTheme';

export type ThemeProps = {
  name: string;
  primary: SubThemeProps;
  secondary: SubThemeProps;
  tertiary?: SubThemeProps;
};

export type SubThemeProps = {
  button: ButtonProps;
};

export type ButtonProps = {
  font: string;
  base: string;
  hover: string;
  active: string;
  disable: string;
};

export const theme: ThemeProps = basicTheme;
