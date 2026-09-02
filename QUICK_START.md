# ⚡ Quick Start: Publish Your React Components to npm

## 5 Minute Overview

Your project is now set up to publish reusable React components to npm. Here's what you need to do:

---

## ✅ Step 1: Prepare Your Components (Already Done!)

Your library folder structure is ready:
```
lib/
├── components/
│   ├── Button/       ← Example component
│   ├── Card/         ← Example component  
│   └── index.ts      ← Exports all components
└── index.ts          ← Main entry point
```

**Add your own components** by creating new folders following the pattern:
```
lib/components/YourComponent/
├── YourComponent.tsx
└── YourComponent.module.css
```

Then export from `lib/components/index.ts`:
```typescript
export { YourComponent } from './YourComponent/YourComponent';
export type { YourComponentProps } from './YourComponent/YourComponent';
```

---

## ✅ Step 2: Update package.json

Open `package.json` and change these fields:

```json
{
  "name": "@yourusername/my-ui-components",
  "description": "Your description here",
  "author": "Your Name <email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-ui-components.git"
  },
  "homepage": "https://github.com/yourusername/my-ui-components#readme",
  "keywords": ["react", "components", "ui"]
}
```

Replace `yourusername` with your actual npm username.

---

## ✅ Step 3: Create npm Account

1. Go to https://www.npmjs.com
2. Click "Sign Up"
3. Create account with email verification
4. Note your username

---

## ✅ Step 4: Build Your Library

```bash
npm install
npm run build:lib
```

This creates the `dist/` folder with compiled code.

---

## ✅ Step 5: Login to npm

```bash
npm login
```

Enter your npm credentials (created in Step 3).

Verify login:
```bash
npm whoami
```

---

## ✅ Step 6: Publish!

```bash
npm publish --access public
```

✨ **Your library is now on npm!**

Check it here: `https://www.npmjs.com/package/@yourusername/my-ui-components`

---

## ✅ Step 7: Use in Other Projects

In any Next.js or React project:

```bash
npm install @yourusername/my-ui-components
```

Then import:
```tsx
import { Button, Card } from '@yourusername/my-ui-components';

export default function App() {
  return <Button variant="primary">Hello World</Button>;
}
```

---

## 📚 Full Documentation

- **[LIBRARY_SETUP.md](./LIBRARY_SETUP.md)** - Detailed component library guide
- **[NPM_PUBLISHING_CHECKLIST.md](./NPM_PUBLISHING_CHECKLIST.md)** - Complete publishing checklist
- **[LOCAL_TESTING.md](./LOCAL_TESTING.md)** - How to test before publishing
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history best practices

---

## 🔄 Updating Your Library

When you make changes:

```bash
# Update version (patch/minor/major)
npm version patch

# Rebuild
npm run build:lib

# Publish new version
npm publish --access public
```

---

## 🎯 Project Structure

```
test-package-app/
├── lib/                          ← Your component library
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   └── index.ts
│   └── index.ts
├── app/                          ← Your Next.js app (optional)
├── package.json                  ← Update name/author
├── tsconfig.lib.json             ← Library TypeScript config
├── rollup.config.js              ← Build configuration
├── .npmignore                    ← What to exclude from npm
├── LIBRARY_SETUP.md              ← Full guide
├── NPM_PUBLISHING_CHECKLIST.md   ← Publishing steps
├── LOCAL_TESTING.md              ← Testing guide
└── CHANGELOG.md                  ← Version history
```

---

## ❓ Frequently Asked Questions

**Q: Can I have both my Next.js app AND the library in one repo?**
A: Yes! This is called a monorepo. Your `app/` folder is your Next.js app, `lib/` is your library.

**Q: Do I need to remove my Next.js code?**
A: No! You can keep it. It's useful for testing components.

**Q: How do I make my package private?**
A: Set `private: true` in package.json, or publish with `--access restricted`.

**Q: Can I update my library after publishing?**
A: Yes! Change version with `npm version patch/minor/major`, then `npm publish`.

**Q: What if the name is already taken?**
A: Use a scoped name: `@yourusername/unique-name`

**Q: Do I need TypeScript?**
A: No, but it's included. Remove `tsconfig.lib.json` if you prefer JavaScript.

**Q: How do I add more components?**
A: Create new folder in `lib/components/`, write component, export from `index.ts`.

---

## 🚀 You're Ready!

Everything is configured. Just:
1. ✏️ Update package.json
2. 📦 Build: `npm run build:lib`
3. 🔐 Login: `npm login`
4. 📤 Publish: `npm publish --access public`

**Happy publishing! 🎉**

---

For more details, see [LIBRARY_SETUP.md](./LIBRARY_SETUP.md)
