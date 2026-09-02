import { jsx as _jsx } from "react/jsx-runtime";
// Example Button Component
import React from 'react';
import styles from './Button.module.css';
export const Button = React.forwardRef(({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (_jsx("button", { ref: ref, className: `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`, ...props }));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map