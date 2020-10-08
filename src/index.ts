import { memo } from 'react';
import DatePicker from './DatePicker/DatePicker';
import Button from './Button/Button';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import Dialog from './Dialog/Dialog';
import Icon from './Icon/Icon';
import DarkLayer from './DarkLayer/DarkLayer';
import Spinner from './Spinner/Spinner';
import Input from './Input/Input';
import Select from './Select/Select';
import Check from './Check/Check';
import Radio from './Radio/Radio';

// memoization 한 후에 export
const MemoButton = memo(Button);
const MemoButtonGroup = memo(ButtonGroup);
const MemoDialog = memo(Dialog);
const MemoIcon = memo(Icon);
const MemoDarkLayer = memo(DarkLayer);
const MemoSpinner = memo(Spinner);
const MemoInput = memo(Input);
const MemoSelect = memo(Select);
const MemoCheck = memo(Check);
const MemoRadio = memo(Radio);
const MemoDatePicker = memo(DatePicker);

/** component */
export { MemoButton as Button };
export { MemoButtonGroup as ButtonGroup };
export { MemoDialog as Dialog };
export { MemoIcon as Icon };
export { MemoDarkLayer as DarkLayer };
export { MemoSpinner as Spinner };
export { MemoInput as Input };
export { MemoSelect as Select };
export { MemoCheck as Check };
export { MemoRadio as Radio };
export { MemoDatePicker as DatePicker };

/** hook */
export { default as useChange } from './hooks/useChange';
export { default as useChangeDate } from './hooks/useChangeDate';
export { default as useChangeCheck } from './hooks/useChangeCheck';

/** enum */
export { default as Color } from './styles/colors/Color';
