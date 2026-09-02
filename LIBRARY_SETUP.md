# My UI Components Library

A lightweight, reusable React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @yourusername/my-ui-components
```

or with yarn:

```bash
yarn add @yourusername/my-ui-components
```

## Usage

### Button Component

```tsx
import { Button } from '@yourusername/my-ui-components';

export default function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="lg">
        Large Secondary
      </Button>
      <Button variant="danger" disabled>
        Disabled Danger
      </Button>
    </div>
  );
}
```

### Card Component

```tsx
import { Card } from '@yourusername/my-ui-components';

export default function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content goes here</p>
    </Card>
  );
}
```

## Component Props

### Button

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

### Card

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
```

## Development

### Build Library

```bash
npm run build:lib
```

This generates:
- `dist/index.js` - CommonJS format
- `dist/index.esm.js` - ES Module format
- `dist/index.d.ts` - TypeScript definitions

### Adding New Components

1. Create a new folder under `lib/components/YourComponent/`
2. Create `YourComponent.tsx` with your component
3. Create `YourComponent.module.css` for styles
4. Export from `lib/components/index.ts`

Example:

```tsx
// lib/components/Badge/Badge.tsx
import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'success', ...props }, ref) => (
    <span
      ref={ref}
      className={`${styles.badge} ${styles[variant]}`}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';
```

## Publishing to npm

### Step 1: Create npm Account

Go to [npmjs.com](https://www.npmjs.com) and create a free account.

### Step 2: Configure Package

Update `package.json`:
- Change `name` from `@yourusername/my-ui-components` to your actual npm username
- Update `author`, `repository`, and `homepage` fields

```bash
# Example for username "johndoe"
npm init --scope=@johndoe
```

### Step 3: Build Library

```bash
npm run build:lib
```

Verify `dist/` folder is created with compiled files.

### Step 4: Login to npm

```bash
npm login
```

Enter your npm credentials (username, password, email).

### Step 5: Publish Package

```bash
npm publish --access public
```

For scoped packages (recommended):

```bash
npm publish --access public
```

### Step 6: Verify Publication

Visit `https://www.npmjs.com/package/@yourusername/my-ui-components`

## Versioning & Updates

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes (1.0.0)
- **MINOR**: New features (1.1.0)
- **PATCH**: Bug fixes (1.0.1)

### Update Version

```bash
# Patch (1.0.0 → 1.0.1)
npm version patch

# Minor (1.0.0 → 1.1.0)
npm version minor

# Major (1.0.0 → 2.0.0)
npm version major
```

Then publish:

```bash
npm publish --access public
```

## Using in Other Projects

### Installation

```bash
npm install @yourusername/my-ui-components
```

### Basic Setup

```tsx
// pages/index.tsx or app/page.tsx
import { Button, Card } from '@yourusername/my-ui-components';

export default function Home() {
  return (
    <div>
      <Card>
        <Button variant="primary">Click Me</Button>
      </Card>
    </div>
  );
}
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import { Button, ButtonProps } from '@yourusername/my-ui-components';

const MyButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" {...props} />
);
```

## License

MIT

## Contributing

Contributions welcome! Please open an issue or PR.

---

**Happy coding! 🚀**
