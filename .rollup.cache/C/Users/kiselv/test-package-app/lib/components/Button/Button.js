import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
// Example Button Component
import React from 'react';
import styles from './Button.module.css';
export const Button = React.forwardRef((_a, ref) => {
    var { variant = 'primary', size = 'md', className, children } = _a, props = __rest(_a, ["variant", "size", "className", "children"]);
    return (_jsx("button", Object.assign({ ref: ref, className: `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}` }, props, { children: children })));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map