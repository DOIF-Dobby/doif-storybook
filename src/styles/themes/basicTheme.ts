import { ThemeProps } from './themes';
import palette from '../colors/palette';

const mainColor = palette.violet;

const basicTheme: ThemeProps = {
  name: 'basic',
  button: {
    primary: {
      font: palette.white,
      base: mainColor[5],
      hover: mainColor[4],
      active: mainColor[6],
      disable: mainColor[2],
    },
    secondary: {
      font: mainColor[5],
      base: 'none',
      hover: palette.gray[1],
      active: mainColor[1],
      disable: mainColor[2],
    },
  },
  dialog: {
    base: palette.white,
    title: palette.gray[8],
    description: palette.gray[6],
  },
};

export default basicTheme;
