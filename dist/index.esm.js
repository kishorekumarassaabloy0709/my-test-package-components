import { jsx } from 'react/jsx-runtime';
import React from 'react';

var styles$1 = {"button":"Button-module_button__sRq-Y","primary":"Button-module_primary__WOvcD","secondary":"Button-module_secondary__JoOEb","danger":"Button-module_danger__9Ophv","sm":"Button-module_sm__wautS","md":"Button-module_md__wa3uJ","lg":"Button-module_lg__ACCPs"};

const Button = React.forwardRef(({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (jsx("button", { ref: ref, className: `${styles$1.button} ${styles$1[variant]} ${styles$1[size]} ${className || ''}`, ...props, children: children }));
});
Button.displayName = 'Button';

var styles = {"card":"Card-module_card__56mNv"};

const Card = React.forwardRef(({ className, children, ...props }, ref) => (jsx("div", { ref: ref, className: `${styles.card} ${className || ''}`, ...props, children: children })));
Card.displayName = 'Card';

export { Button, Card };
//# sourceMappingURL=index.esm.js.map
