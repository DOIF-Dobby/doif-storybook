export declare type ThemeProps = {
    name: string;
    button: ButtonThemeProps;
    dialog: DialogProps;
};
export declare type ButtonThemeProps = {
    primary: ButtonProps;
    secondary: ButtonProps;
    tertiary?: ButtonProps;
};
export declare type ButtonProps = {
    font: string;
    base: string;
    hover: string;
    active: string;
    disable: string;
};
export declare type DialogProps = {
    base: string;
    title: string;
    description: string;
};
export declare const theme: ThemeProps;
