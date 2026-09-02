'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var styles$1 = {"button":"Button-module_button__sRq-Y","primary":"Button-module_primary__WOvcD","secondary":"Button-module_secondary__JoOEb","danger":"Button-module_danger__9Ophv","sm":"Button-module_sm__wautS","md":"Button-module_md__wa3uJ","lg":"Button-module_lg__ACCPs"};

const Button = React__default.default.forwardRef(({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("button", { ref: ref, className: `${styles$1.button} ${styles$1[variant]} ${styles$1[size]} ${className || ''}`, ...props, children: children }));
});
Button.displayName = 'Button';

var styles = {"card":"Card-module_card__56mNv"};

const Card = React__default.default.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: `${styles.card} ${className || ''}`, ...props, children: children })));
Card.displayName = 'Card';

exports.Button = Button;
exports.Card = Card;
//# sourceMappingURL=index.js.map
