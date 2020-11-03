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
import Tab from './Tab/Tab';
import Form from './Form/Form';
import Row from './Form/Row';
import Column from './Form/Column';
import Label from './Form/Label';
import Field from './Form/Field';

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
const MemoTab = memo(Tab);
const MemoForm = memo(Form);
const MemoRow = memo(Row);
const MemoColumn = memo(Column);
const MemoLabel = memo(Label);
const MemoField = memo(Field);

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
export { MemoTab as Tab };
export { MemoForm as Form };
export { MemoRow as Row };
export { MemoColumn as Column };
export { MemoLabel as Label };
export { MemoField as Field };

/** hook */
export { default as useChange } from './hooks/useChange';
export { default as useChangeDate } from './hooks/useChangeDate';
export { default as useChangeCheck } from './hooks/useChangeCheck';

/** lib */
export { default as DoifUtil } from './libs/DoifUtil';

/** enum */
export { default as Color } from './styles/colors/Color';
