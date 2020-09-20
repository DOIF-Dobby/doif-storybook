import { ThemeProps } from './themes';
import palette from '../colors/palette';

const mainColor = palette.violet;

const basicTheme: ThemeProps = {
  name: 'basic',
  primary: {
    button: {
      font: palette.white,
      base: mainColor[5],
      hover: mainColor[4],
      active: mainColor[6],
      disable: mainColor[2],
    },
  },
  secondary: {
    button: {
      font: mainColor[5],
      base: 'none',
      hover: palette.gray[1],
      active: mainColor[1],
      disable: mainColor[2],
    },
  },
};

export default basicTheme;
