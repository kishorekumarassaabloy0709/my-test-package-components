# 📦 NPM Publishing Checklist

## Pre-Publishing Checklist

- [ ] **Update package.json** 
  - [ ] Change `name` to your npm scope: `@yourusername/my-ui-components`
  - [ ] Update `version` (start with 0.1.0 or 1.0.0)
  - [ ] Set `private: false`
  - [ ] Update `author` field with your name
  - [ ] Add `license` (MIT recommended)
  - [ ] Add `repository` URL
  - [ ] Add meaningful `keywords`

- [ ] **Create npm Account**
  - [ ] Go to https://www.npmjs.com/signup
  - [ ] Create account with email verification
  - [ ] Note your username

- [ ] **Create/Update Components**
  - [ ] Create reusable components in `lib/components/`
  - [ ] Export all components from `lib/components/index.ts`
  - [ ] Add TypeScript types/interfaces
  - [ ] Add CSS modules for styling
  - [ ] Test components locally in your Next.js app

- [ ] **Documentation**
  - [ ] Create comprehensive README.md
  - [ ] Document each component's props
  - [ ] Add usage examples
  - [ ] Create CHANGELOG.md

- [ ] **Quality Checks**
  - [ ] Run `npm run lint` - ensure no errors
  - [ ] Test all components in your app
  - [ ] Check TypeScript compilation: `npx tsc --noEmit`
  - [ ] Verify bundle size is reasonable

## Build & Publish Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build Library
```bash
npm run build:lib
```
✅ Verify `dist/` folder exists with:
- `index.js` (CommonJS)
- `index.esm.js` (ES Module)
- `index.d.ts` (TypeScript definitions)

### Step 3: Login to npm (First Time Only)
```bash
npm login
```
- Username: your npm username
- Password: your npm password
- Email: your registered email

Verify login:
```bash
npm whoami
```

### Step 4: Test Locally (Optional)
```bash
npm pack
```
This creates `my-ui-components-0.1.0.tgz` for testing.

### Step 5: Publish to npm
```bash
npm publish --access public
```

For scoped packages (recommended for private use):
```bash
npm publish --access restricted
```

✅ Check publication: https://www.npmjs.com/package/@yourusername/my-ui-components

### Step 6: Verify Installation
In another project:
```bash
npm install @yourusername/my-ui-components
```

Test import:
```tsx
import { Button, Card } from '@yourusername/my-ui-components';
```

## Updating Your Library

### When you make changes:

1. **Update version**:
   ```bash
   npm version patch  # 0.1.0 → 0.1.1
   npm version minor  # 0.1.0 → 0.2.0
   npm version major  # 0.1.0 → 1.0.0
   ```

2. **Rebuild**:
   ```bash
   npm run build:lib
   ```

3. **Publish**:
   ```bash
   npm publish --access public
   ```

## Common Issues & Solutions

### ❌ "npm ERR! code E401 Unauthorized"
- Run `npm login` again
- Verify email if it's first account
- Check npm token with `npm token list`

### ❌ "npm ERR! 403 Forbidden"
- Package name already exists
- Use scoped name: `@yourusername/package-name`
- Check capitalization in name

### ❌ Components not exporting correctly
- Verify exports in `lib/index.ts`
- Check `lib/components/index.ts` has all exports
- Ensure TypeScript compiles without errors

### ❌ CSS styles not included
- Verify `rollup-plugin-postcss` is installed
- Check CSS is in `.module.css` files
- Build should extract CSS to `dist/` folder

### ❌ TypeScript definitions missing
- Verify `types` field in package.json
- Run `npm run build:lib` to generate .d.ts files
- Check `tsconfig.lib.json` has `declaration: true`

## File Structure Reference

```
lib/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.module.css
│   └── index.ts           ← Export all
├── index.ts               ← Main entry point
├── hooks/                 ← Custom hooks
└── utils/                 ← Helper functions
```

## Publishing to Other Registries

### GitHub Packages
```bash
npm publish --registry https://npm.pkg.github.com
```

### Private npm Registry
```bash
npm publish --registry https://your-registry.com
```

---

**You're ready to go! 🚀**

Questions? See [NPM Publishing Docs](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
