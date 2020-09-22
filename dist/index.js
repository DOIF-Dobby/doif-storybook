import { jsx, css } from '@emotion/core';
import { Fragment, createElement } from 'react';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var palette = {
  white: '#ffffff',
  black: '#000000',
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
};

var mainColor = palette.violet;
var basicTheme = {
  name: 'basic',
  button: {
    primary: {
      font: palette.white,
      base: mainColor[5],
      hover: mainColor[4],
      active: mainColor[6],
      disable: mainColor[2]
    },
    secondary: {
      font: mainColor[5],
      base: 'none',
      hover: palette.gray[1],
      active: mainColor[1],
      disable: mainColor[2]
    }
  },
  dialog: {
    base: palette.white,
    title: palette.gray[8],
    description: palette.gray[6]
  }
};

var theme = basicTheme;

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    height: 3.5rem;\n    font-size: 1.35rem;\n    padding: 0 1.5rem;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    height: 2.75rem;\n    font-size: 1rem;\n    padding: 0 1rem;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    height: 2rem;\n    font-size: 0.8rem;\n    padding: 0 0.875rem;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n\n    &:hover:enabled {\n      background: ", ";\n    }\n    &:active:enabled {\n      background: ", ";\n    }\n    &:disabled {\n      color: ", ";\n      background: ", ";\n\n      svg {\n        fill: ", ";\n      }\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n\n    svg {\n      fill: white;\n    }\n\n    &:hover:enabled {\n      background: ", ";\n    }\n    &:active:enabled {\n      background: ", ";\n    }\n    &:disabled {\n      background: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 3rem;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 2.5rem;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 1.75rem;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  border-radius: 50%;\n  svg {\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.875rem;\n  padding: 0 1rem;\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    margin-right: 1rem;\n  }\n\n  &:hover:enabled {\n    cursor: pointer;\n  }\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      iconOnly = _ref.iconOnly,
      onClick = _ref.onClick;
  return jsx("button", {
    onClick: onClick,
    disabled: disabled,
    css: [style, themes[theme], sizes[size], {
      width: width
    }, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]]
  }, children);
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium'
};
var _theme$button = theme.button,
    primary = _theme$button.primary,
    secondary = _theme$button.secondary;
var style = css(_templateObject());
var iconOnlyStyle = css(_templateObject2());
var iconOnlySizes = {
  small: css(_templateObject3()),
  medium: css(_templateObject4()),
  big: css(_templateObject5())
};
var themes = {
  primary: css(_templateObject6(), primary.base, primary.font, primary.hover, primary.active, primary.disable),
  secondary: css(_templateObject7(), secondary.base, secondary.font, secondary.font, secondary.hover, secondary.active, secondary.disable, secondary.base, secondary.disable)
};
var sizes = {
  small: css(_templateObject8()),
  medium: css(_templateObject9()),
  big: css(_templateObject10())
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup`을 사용하세요.
 */
function ButtonGroup(_ref) {
  var direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      children = _ref.children,
      gap = _ref.gap,
      className = _ref.className;
  return jsx("div", {
    css: [{
      display: 'flex',
      flexDirection: direction
    }, gapStyle(direction, gap), rightAlign && rightAlignStyle],
    className: className
  }, children);
}

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
}; // direction에 따라 margin-left 또는 margin-top 설정

var gapStyle = function gapStyle(direction, gap) {
  var marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': _defineProperty({}, marginType, gap)
  });
};

var rightAlignStyle = css(_templateObject$1());

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 25rem;\n  background-color: ", ";\n  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n  padding: 2rem;\n\n  h3 {\n    font-size: 1.5rem;\n    color: ", ";\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    font-size: 1.125rem;\n    margin: 0;\n    color: ", ";\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1010;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * `Dialog` 컴포넌트는 메시지를 띄울 때 사용합니다.
 */
function Dialog(_ref) {
  var visible = _ref.visible,
      title = _ref.title,
      description = _ref.description,
      hideButtons = _ref.hideButtons,
      cancellable = _ref.cancellable,
      cancelText = _ref.cancelText,
      confirmText = _ref.confirmText,
      children = _ref.children,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;

  if (!visible) {
    return null;
  }

  return jsx(Fragment, null, jsx("div", {
    css: [fullscreen, darkLayer]
  }), jsx("div", {
    css: [fullscreen, whiteBoxWrapper]
  }, jsx("div", {
    css: whiteBox
  }, title && jsx("h3", null, title), description && jsx("p", null, description), children, !hideButtons && jsx(ButtonGroup, {
    css: {
      marginTop: '3rem'
    },
    rightAlign: true
  }, cancellable && jsx(Button, {
    theme: "secondary",
    onClick: onCancel
  }, cancelText), jsx(Button, {
    onClick: onConfirm
  }, confirmText)))));
}

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인'
};
var dialog = theme.dialog;
var fullscreen = css(_templateObject$2());
var darkLayer = css(_templateObject2$1());
var whiteBoxWrapper = css(_templateObject3$1());
var whiteBox = css(_templateObject4$1(), dialog.base, dialog.title, dialog.description);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  d: "M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"
});

function SvgExit(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/createElement("path", {
  d: "M18 1l-6 4-6-4-6 5v7l12 10 12-10V6z"
});

function SvgHeart(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    width: 24,
    height: 24
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/createElement("path", {
  d: "M7.127 22.564L.001 24l1.438-7.125 5.688 5.689zM2.853 15.46l5.688 5.689 15.46-15.46L18.312 0 2.853 15.46z"
});

function SvgPencil(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    width: 24,
    height: 24
  }, props), _ref$2);
}

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exit: SvgExit,
  heart: SvgHeart,
  pencil: SvgPencil
});

/** @jsx jsx */

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return jsx(SVGIcon, {
    css: {
      fill: color || 'currentColor',
      width: size,
      height: 'auto'
    },
    className: className
  });
}

export { Button, ButtonGroup, Dialog, Icon };
