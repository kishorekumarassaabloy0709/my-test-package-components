# Testing Your Component Library Locally

Before publishing to npm, test your library thoroughly in a separate project.

## Method 1: npm link (Fastest for Testing)

### Link your library globally:
```bash
cd ~/path/to/test-package-app
npm run build:lib
npm link
```

### Use in another project:
```bash
cd ~/path/to/another-nextjs-app
npm link @yourusername/my-ui-components
```

### Code to test:
```tsx
// pages/components.tsx or app/components/page.tsx
'use client';
import { Button, Card } from '@yourusername/my-ui-components';
import { useState } from 'react';

export default function ComponentsPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Component Library Test</h1>

      <Card>
        <h2 className="text-xl font-bold mb-4">Button Variants</h2>
        
        <div className="space-y-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </Card>

      <Card className="mt-4">
        <h2 className="text-xl font-bold mb-4">Button Sizes</h2>
        
        <div className="space-y-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Card>

      <Card className="mt-4">
        <h2 className="text-xl font-bold mb-4">Interactive Test</h2>
        <p className="mb-4">Count: {count}</p>
        <Button 
          variant="primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
      </Card>
    </div>
  );
}
```

### To unlink when done:
```bash
npm unlink @yourusername/my-ui-components
```

---

## Method 2: npm pack (Realistic npm Installation)

### Create tarball:
```bash
cd ~/path/to/test-package-app
npm run build:lib
npm pack
```

Creates: `my-ui-components-0.1.0.tgz`

### Install in another project:
```bash
cd ~/path/to/another-nextjs-app
npm install ~/path/to/test-package-app/my-ui-components-0.1.0.tgz
```

### Test components (same code as above)

### Clean up:
```bash
npm uninstall my-ui-components
rm ~/path/to/test-package-app/my-ui-components-0.1.0.tgz
```

---

## Method 3: Local File Path (For Development)

In `package.json` of consuming project:

```json
{
  "dependencies": {
    "@yourusername/my-ui-components": "file:../test-package-app"
  }
}
```

Then run:
```bash
npm install
```

---

## Testing Checklist

- [ ] Components render without errors
- [ ] Props work correctly
  - [ ] Button variants change appearance
  - [ ] Button sizes scale properly
  - [ ] Card accepts children
- [ ] TypeScript types are recognized
- [ ] CSS styles load correctly
- [ ] Event handlers work (onClick, onChange, etc.)
- [ ] Responsive design works
- [ ] Accessibility (keyboard navigation, ARIA labels)
- [ ] Bundle size is reasonable

---

## Debugging Tips

### Check what's in dist/:
```bash
npm run build:lib
ls -la dist/
cat dist/index.d.ts
```

### Verify package.json main/module fields:
```bash
cat package.json | grep -A 3 '"main"'
```

### Test TypeScript compilation:
```bash
npx tsc --noEmit
```

### View dependencies:
```bash
npm ls
```

### Check peer dependencies:
In consuming project, run:
```bash
npm ls react react-dom
```

Should show your react/react-dom versions.

---

## Real-World Testing Example

Create a test file:

```tsx
// __tests__/components.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, Card } from '../lib';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies variant className', () => {
    render(<Button variant="danger">Delete</Button>);
    const button = screen.getByText('Delete');
    expect(button).toHaveClass('danger');
  });
});
```

---

**You're all set for local testing! 🧪**
