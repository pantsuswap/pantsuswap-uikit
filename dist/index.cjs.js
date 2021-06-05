'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$K, templateObject_2$f, templateObject_3$8;

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$J;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes$1 = {
    SM: "sm",
    MD: "md",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    opacity: 0.8;\n  }\n\n  &:active:not(:disabled):not(.button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    opacity: 0.8;\n  }\n\n  &:active:not(:disabled):not(.button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$I;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants$1.PRIMARY,
    size: sizes$1.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$H;

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$13 = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTczN0RFRERDMDhCMTFFQjkwNTBFQjI5Njc2MTM2OTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTczN0RFREVDMDhCMTFFQjkwNTBFQjI5Njc2MTM2OTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzM3REVEQkMwOEIxMUVCOTA1MEVCMjk2NzYxMzY5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNzM3REVEQ0MwOEIxMUVCOTA1MEVCMjk2NzYxMzY5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiSeT8YAAEqUSURBVHja7L0HdFTV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", width: "32" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$N = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDUxNzI1RUJDMEEwMTFFQjkxNUNGN0M3RDZGOUYyNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxNzI1RUNDMEEwMTFFQjkxNUNGN0M3RDZGOUYyNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTE3MjVFOUMwQTAxMUVCOTE1Q0Y3QzdENkY5RjI0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTE3MjVFQUMwQTAxMUVCOTE1Q0Y3QzdENkY5RjI0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptr9OyYAAEJySURBVHjazL0HfFRV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", width: "90" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("image", { href: "data:image/png;base64,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", width: "80" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$G;

var variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.INFO : _b;
    switch (variant) {
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.INFO; }
    switch (variant) {
        case variants.DANGER:
            return Icon$1d;
        case variants.WARNING:
            return Icon$1e;
        case variants.SUCCESS:
            return Icon$1f;
        case variants.INFO:
        default:
            return Icon$1c;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px 0 0 8px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 8px 0 0 8px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  border-radius: 0 8px 8px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 8px 8px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$X, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$F, templateObject_2$e, templateObject_3$7, templateObject_4$3;

var Separator = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$Z, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$E, templateObject_2$d;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$1.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  button,\n  a {\n    height: 40px;\n    padding: 0 24px;\n    border-radius: 16px;\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  button,\n  a {\n    height: 40px;\n    padding: 0 24px;\n    border-radius: 16px;\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$D;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants$1.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$C;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border: solid #435466 1px;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border: solid #435466 1px;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$B;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$A;

var CardHeader = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  // background: ", ";\n  border-bottom: 1px solid ", ";\n  ", "\n"], ["\n  // background: ", ";\n  border-bottom: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$z;

var CardFooter = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$y;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$x;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 4px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 4px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$3.MD,
};
var templateObject_1$w;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$v, templateObject_2$c;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$2;
var style = (_a$2 = {},
    _a$2[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$2[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$2[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$2[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$2);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$u;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$t;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$s, templateObject_2$b;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$r;

var GridLayout$1 = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$q;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$p;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "12px";
        case scales$1.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$1.MD,
    m: 0,
};
var templateObject_1$o;

var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 8px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 8px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$m;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$M, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.primary : props.theme.colors.primary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$l, templateObject_2$a;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$k;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$G, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;
//
// const float = keyframes`
// 	0% {
// 		transform: translatey(0px);
// 	}
// 	50% {
// 		transform: translatey(10px);
// 	}
// 	100% {
// 		transform: translatey(0px);
// 	}
// `;
var pulse$1 = styled.keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"], ["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));
var Container$3 = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
// const RotatingPancakeIcon = styled(PancakeIcon)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: ${rotate} 2s linear infinite;
//   transform: translate3d(0, 0, 0);
// `;
//
// const FloatingPanIcon = styled(PanIcon)`
//   animation: ${float} 6s ease-in-out infinite;
//   transform: translate3d(0, 0, 0);
// `;
var PulseLogoIcon = styled__default['default'](Icon$Q)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), pulse$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(PulseLogoIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$j, templateObject_2$9, templateObject_3$6;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$i, templateObject_2$8, templateObject_3$5, templateObject_4$2, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$h, templateObject_2$7, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #FF720D, 0px 0px 4px 8px rgba(183, 136, 0, 0.4)",
    success: "0px 0px 0px 1px #68CF29, 0px 0px 0px 4px rgba(104, 207, 41, 0.2)",
    warning: "0px 0px 0px 1px #F72B50, 0px 0px 0px 4px rgba(247, 43, 80, 0.2)",
    focus: "0px 0px 0px 1px #e66000, 0px 0px 0px 4px rgba(230, 96, 0, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 16px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 16px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$1a, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$X, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$g, templateObject_2$6, templateObject_3$3;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.2 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("image", { href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJQTFRFAAAAqHAZc0oQn2oYv4Ad5ZkjuXscuXwcs3cbuXwbzokfzokftnobZk0A0owgx4UeakAAp3AZp3AaxoUeu30ch1oV35Ui3JMhhVoTyIUevH0ciVoTw4MdxIMew4MdiVwVe1IRlmQX4pciz4ogx4QeiVwVhlgTyYYez4oflmQWz4of5JgjwoEen2oXnmoX0YsgxIMeoWwYoGsY040gxIMeyIYesncboWwYs3ca1Y4g0YsgzIgfbUkAtnkboWwYt3oac0oQ0Isf0YsfdUkPwIAduXwbi5bLDAAAAEZ0Uk5TAHIHY9D/bWy7iO7vXwLm2QJ2UK+NMf38IbydKnDibCckTv/pmzoxnOk0xf+oXT/by1o+5cjae0FU7drlA2BiYQvu7giXbyrdqWMAAAC1SURBVHichZDXEoIwFEQjunbsXbFgF7so9u7//5KYUCUz7ENu5pxsMhNC/BMQhCCPhxCOIMoRMcQTSHKEmALSGd5dWSDHfTwPFHi8WALKFY6oQk+NI+oNSWq2vLztGnY6crfXHwxH8vhPTPQHFEVfpm4++zEaZe4SC1hZOvkKjqwdYkOJqtKxtfmOHdU0NvcmFw+sQMiRbk5nQ1yMAiFXtrsxfn+YBbPyfFHxtgpW5eP9Mv98AViVDmEUG+qFAAAAAElFTkSuQmCC", width: "24" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React__default['default'].createElement("path", { d: "M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React__default['default'].createElement("path", { d: "M13,2.05V5.08C16.39,5.57 19,8.47 19,12C19,12.9 18.82,13.75 18.5,14.54L21.12,16.07C21.68,14.83 22,13.45 22,12C22,6.82 18.05,2.55 13,2.05M12,19A7,7 0 0,1 5,12C5,8.47 7.61,5.57 11,5.08V2.05C5.94,2.55 2,6.81 2,12A10,10 0 0,0 12,22C15.3,22 18.23,20.39 20.05,17.91L17.45,16.38C16.17,18 14.21,19 12,19Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" })));
};

var Logo$1 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    // const textColor = isDark ? "#FFFFFF" : "#000000";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 174 26" }, props),
        React__default['default'].createElement("image", { href: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAYAAAAuV2eNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODA0NkZFRDFDMENFMTFFQjhEODY5OTc5M0NBOEE4M0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODA0NkZFRDJDMENFMTFFQjhEODY5OTc5M0NBOEE4M0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MDQ2RkVDRkMwQ0UxMUVCOEQ4Njk5NzkzQ0E4QTgzQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MDQ2RkVEMEMwQ0UxMUVCOEQ4Njk5NzkzQ0E4QTgzQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhCNBrkAABv7SURBVHja7Fx3VFbH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", width: "174" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("rect", { fill: "none", height: "24", width: "24" }),
        React__default['default'].createElement("path", { d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("image", { href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAn9QTFRFAAAAq3IZq3MZpW4Zvn8cmGUWpW4Yyocfpm4YpW0ZxoQe1I4g0Isg0Isfw4Idv4Acz4ofxoQekGAVyocesHYasXYb0owgeFAPdVAQsHUakGAUtnocyIYez4oftXkbfFIT3JMhdUkPfFMStnkbtXkbh1oU0owg1I0g2JAhxoQeQCAAzYkfiFsUTTMAr3UaxoQexoQe0owgmmYXtnkbxoUeoGsXvX4dpm8ZoWsXmmcXxYQernUa3JQh3JMhuXwc0Isfv38cdEsN1Y4gyYYe0Ywg4JYiv38dunwc25Mh25Mhtnob1o8ghVgUqHIZ1I4gsHYbxoUezoofj2AVdEwPsXcb1I4ghVkTwYEdzokfxYQe0owgnWgWp28ZzoofmmgX0YsgeVEQm2gXzoofpnAZzoofz4ofv38chFgTunwc1o8gp28ZzYkf35Uh1o8hvX4cvn4c35UipnAZu3wcp3AYyoce0Ywgx4UetHkbqXEZ0Ysg0YwgvX4cp3AZ040gelESp3AZvX4c0owgtXkbyocew4Iezoofvn8dzYkfzokfzIgfwoIdxIMefFQTdU8R0Isfzoofc08RflQSxYQew4Idw4IdxIMdx4Ueq3Maj18Vl2UWyIYe2JAhsXcauXsby4gf0owguHsbsncayIYemGUWq3IanWgW25IhzoofzYkf1o8g3JMh3JMifVMS0YwgnmkXnmsX0IsgfVQR3JMhzokfzoofvX4cjmAVpG4YxIMd1o8g5Zkj5JgjcEcKcUwJjV8Vw4Idzokf15Ahy4gfxYMezYkf4ZYizYkf148h3JMiwoIdiFwUwYEd3JMhz4ofw4IeuXwctXkbtnocv4AdyYYezooftAzHvAAAANV0Uk5TABkZETEVH8kiEZnv3OCeleCYGt5Mb/QGBkwaXpPtNxT9CBQ2XhDYr+V/AfRFARNxoe0pa80dyn4eKXESM+qT4Y0Ly7r0/46T6jNX3SMq60t/6F0cS+wj0u3b3SpO4GvmF2vfTu3LYgp78Gag/vaOjv5mex/G4YU6WdzsaUvqCExq7DrHysJprNqjyYkHCfWpCAeKycqqsywjQ5r1LVOL6lIum0MsP/3l5NvW2A3CVlfCDdjl3okgKzFpzMwDAyCr1HWHm7zyxMryqhF4mZaPhXdkTzmWNIlzHgAAAYVJREFUeJxjYKAJYGTCIsjMwsrGzs7BysKJJsHFzcPLxy/Awy2IKi4kLCIqJi4hJiopLIUsLi0jKyevoKiooKQsK6OCEFdVU9fQ1NLW0dHW1dRQV1OFCuvpGxgaGZuYmpmbm1mYGFsaGlhZgyVsbO3sHRydnF1cXV2cnRzd7N09PMESXt4+vn7+AYFBwcFBgQEhob5h3l4g8fCIyKjomNi4+AQGhoT4xKTk6KjIlHCgRGpaekZmVnZObh4DQ35uQXZhZlF6WioDQ3FJaVl5RWVVdU1tXV1tfUNjZUVTWWlzMUNLa1t7R2dXd09vX39/34SJkyZ3drS3tU5hmDpt+oyZs2bPYZhbO2/e/AUMC2cvWjxjybSpDEuXLV+xctXqNQxr1zEwrN/AsHHTqpUrNi9byrBl67btO3buYmDYvYeBYe9uBoZdO3ds37d1C8P+AwcPHT5y9NjxEyC3nzh+7OiRw4cOHjjJcOr0mbPnzl+4eOkySOLypYsXzp+7cub0KdLjGScAAHdlhKWir89zAAAAAElFTkSuQmCC", width: "24" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("rect", { fill: "none", height: "24", width: "24" }),
        React__default['default'].createElement("path", { d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React__default['default'].createElement("path", { d: "M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React__default['default'].createElement("path", { d: "M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.2,10.95L12,23L2.78,10.96L2.87,10.88C3.08,10.67 3.33,10.5 3.58,10.36L10.73,19.69L8.58,13L9.24,11.81L12,20.38L14.73,11.8L15.4,13L13.27,19.69L20.41,10.35C20.66,10.5 20.9,10.64 21.1,10.85L21.2,10.95M5,9C6.5,9 7.81,9.86 8.5,11.1C9.17,9.86 10.47,9 12,9C13.5,9 14.8,9.85 15.5,11.09C16.16,9.84 17.47,9 19,9C20.09,9 21.09,9.42 21.81,10.14C20.94,5.5 16.88,2 12,2C7.09,2 3.03,5.5 2.16,10.17C2.89,9.45 3.89,9 5,9Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React__default['default'].createElement("path", { d: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 27 27" }, props),
        React__default['default'].createElement("path", { d: "M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11M12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21M15.05 16L11.97 14.15L8.9 16L9.71 12.5L7 10.16L10.58 9.85L11.97 6.55L13.37 9.84L16.95 10.15L14.23 12.5L15.05 16" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$x,
    GroupsIcon: Icon$w,
    HamburgerIcon: Icon$v,
    HamburgerCloseIcon: Icon$u,
    HomeIcon: Icon$t,
    IfoIcon: Icon$s,
    InfoIcon: Icon$r,
    LanguageIcon: Icon$q,
    LogoIcon: Logo$1,
    MoonIcon: Icon$p,
    MoreIcon: Icon$o,
    NftIcon: Icon$n,
    PoolIcon: Icon$m,
    SunIcon: Icon$l,
    TelegramIcon: Icon$k,
    TicketIcon: Icon$j,
    TradeIcon: Icon$i,
    TwitterIcon: Icon$h,
    ReferralIcon: Icon$g,
    ShieldIcon: Icon$f,
    GithubIcon: Icon$e,
    MediumIcon: Icon$d,
    GitbookIcon: Icon$c,
    JungleIcon: Icon$b,
    ListingIcon: Icon$a,
    FaucetIcon: Icon$9,
    AirdropIcon: Icon$8,
    ChartIcon: Icon$7,
    FeatureIcon: Icon$6
});

var MenuButton = styled__default['default'](Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 4px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 4px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 174px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 174px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$Q, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo$1, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "14px" }, isPushed ? (React__default['default'].createElement(Icon$u, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$v, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Cherokee home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Panther home page" }, innerLogo))));
};
var templateObject_1$c;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://dex.cherokee.finance",
            },
            {
                label: "Liquidity",
                href: "https://dex.cherokee.finance/#/pool",
            },
        ],
    },
    {
        label: "Buy APACHE",
        icon: "TradeIcon",
        href: "https://app.apache.finance",
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://cherokee.info",
            },
            {
                label: "Tokens",
                href: "https://cherokee.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://cherokee.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://cherokee.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.cherokee.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.cherokee.finance",
            },
            {
                label: "Blog",
                href: "https://cherokee.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/cherokeefinance",
    },
    {
        label: "Docs",
        icon: "GitbookIcon",
        href: "https://cherokee.gitbook.io/cherokeefinance/",
    },
    // {
    //  label: "Medium",
    //  icon: "MediumIcon",
    //  href: "https://cherokee.medium.com",
    // },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/CherokeeFinance",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "Community",
                href: "https://t.me/cherokeefinance",
            },
            {
                label: "Announcements",
                href: "https://t.me/cherokeefinanceAnn",
            },
        ],
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n  color: ", ";\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n  color: ", ";\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    animation: ", " 5s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n\n    a > div {\n      color: ", ";\n    }\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    animation: ", " 5s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n\n    a > div {\n      color: ", ";\n    }\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$b, templateObject_2$5, templateObject_3$2;

var Container$2 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$17, null) : React__default['default'].createElement(Icon$18, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$a, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "14px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$9;

var Icons = IconModule;
Icons.LanguageIcon;
var Container = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var openInMetamask = function (callback) {
    var provider = window.web3.currentProvider;
    provider.sendAsync({
        method: 'metamask_watchAsset',
        params: {
            "type": "ERC20",
            "options": {
                "address": "0x30f38e9151FD9C4eCF539418E505d6A8407214AD",
                "symbol": "CHEROKEE",
                "decimals": 18,
                "image": "https://www.cherokee.finance/img/logo.png",
            },
        },
        id: Math.round(Math.random() * 100000),
    }, function (err, added) {
        console.log('provider returned', err, added);
        if (err || 'error' in added) {
            return;
        }
    });
};
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd, cakePriceLink = _a.cakePriceLink; _a.currentLang; _a.langs; _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$W, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: cakePriceLink, target: "_blank" },
                React__default['default'].createElement(Icon$K, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { color: "text", fontSize: "15px", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
            React__default['default'].createElement(Button, { size: "sm", variant: "text", onClick: openInMetamask },
                React__default['default'].createElement(Icon$V, null),
                React__default['default'].createElement(Icon$M, null))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons[social.icon];
                var iconProps = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "20px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr, style: { display: "flex", alignItems: "center" } })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            })))));
};
var templateObject_1$8, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var StyledPanel = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$5,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$2,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$4,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$3,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.cherokee.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$S, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$T, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "md", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$N, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, cakePriceLink = _a.cakePriceLink, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, cakePriceLink: cakePriceLink, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants.INFO,
    _a$1[types.SUCCESS] = variants.SUCCESS,
    _a$1[types.DANGER] = variants.DANGER,
    _a$1[types.WARNING] = variants.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  .absolute-full, .fixed-full, .fullscreen {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 4px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 5px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  .absolute-full, .fixed-full, .fullscreen {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 4px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 5px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#F72B50",
    primary: "#faa400",
    primaryBright: "#e66000",
    primaryDark: "#d95b00",
    secondary: "#7645D9",
    success: "#68CF29",
    warning: "#FFAB2D",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputBorder: "#cccccc", tertiary: "#EFF4F5", text: "#452A7A", textDisabled: "#BDC2C4", textSubtle: "#FF720D", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#e9f1fd", background: "#1f2b46", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#0a0e17", input: "#483f3b", inputBorder: "#cccccc", primaryDark: "#d95b00", tertiary: "#2d2f37", text: "#FFFFFF", textDisabled: "#666171", textSubtle: "#faa400", borderColor: "#524B63", card: "#121827", gradients: {
        bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var _a, _b;
var PRIMARY = variants$1.PRIMARY, SECONDARY = variants$1.SECONDARY, TERTIARY = variants$1.TERTIARY, TEXT = variants$1.TEXT, DANGER = variants$1.DANGER, SUBTLE = variants$1.SUBTLE, SUCCESS = variants$1.SUCCESS;
var light$5 = (_a = {},
    _a[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a);
var dark$5 = (_b = {},
    _b[PRIMARY] = __assign({}, light$5.primary),
    _b[SECONDARY] = __assign({}, light$5.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$5.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$5.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$5.danger),
    _b[SUBTLE] = __assign({}, light$5.subtle),
    _b[SUCCESS] = __assign({}, light$5.success),
    _b);

var light$4 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$4 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$1 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, button: dark$5, colors: darkColors, card: dark$4, toggle: dark$2, nav: dark$1, modal: dark, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, button: light$5, colors: lightColors, card: light$4, toggle: light$2, nav: light$1, modal: light, radio: light$3 });

exports.AddIcon = Icon$1b;
exports.AlarmIcon = Icon$y;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1a;
exports.ArrowDownIcon = Icon$19;
exports.ArrowDropDownIcon = Icon$18;
exports.ArrowDropUpIcon = Icon$17;
exports.ArrowForwardIcon = Icon$16;
exports.AutoRenewIcon = Icon$15;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$14;
exports.BlockIcon = Icon$1d;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$13;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$11;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$12;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1f;
exports.CheckmarkIcon = Icon$10;
exports.ChevronDownIcon = Icon$$;
exports.ChevronLeftIcon = Icon$_;
exports.ChevronRightIcon = Icon$Z;
exports.ChevronUpIcon = Icon$Y;
exports.CloseIcon = Icon$X;
exports.CogIcon = Icon$W;
exports.CommunityIcon = Icon$U;
exports.CopyIcon = Icon$T;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1e;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$S;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$1c;
exports.Input = Input$1;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$R;
exports.LogoIcon = Icon$Q;
exports.LogoRoundIcon = Icon$P;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$V;
exports.MinusIcon = Icon$O;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$N;
exports.OpenNewIcon = Icon$M;
exports.PancakeRoundIcon = Icon$K;
exports.PancakesIcon = Icon$L;
exports.PrizeIcon = Icon$J;
exports.Progress = Progress;
exports.ProgressBunny = Icon$G;
exports.Radio = Radio;
exports.RemoveIcon = Icon$I;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$C;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$B;
exports.SyncAltIcon = Icon$A;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$E;
exports.TicketRound = Icon$D;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$H;
exports.WarningIcon = Icon$z;
exports.Won = Icon$F;
exports.alertVariants = variants;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
