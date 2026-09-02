import { jsx as _jsx } from "react/jsx-runtime";
// Example Card Component
import React from 'react';
import styles from './Card.module.css';
export const Card = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: `${styles.card} ${className || ''}`, ...props, children: children })));
Card.displayName = 'Card';
export default Card;
//# sourceMappingURL=Card.js.map