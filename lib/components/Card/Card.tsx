// Example Card Component
import React from 'react';
import styles from './Card.module.css';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.card} ${className || ''}`}
      {...props}
    />
  )
);

Card.displayName = 'Card';

export default Card;
