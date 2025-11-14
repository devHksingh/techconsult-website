# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


ui

Professional Color Scheme:

Deep navy (#0F172A) for authority and trust
Professional blue (#3B82F6) for technology
Cyan accent (#06B6D4) for modern tech feel
Clean white background with subtle gradients


Two-Tier Navigation:

Top bar with contact info (email/phone) that slides away on scroll
Main navigation that becomes sticky with backdrop blur


Enhanced Branding:

Professional logo with gradient background
Company name with tagline
Consistent visual identity


Smooth Interactions:

Animated underline on nav items (kept from your original)
Hover effects with color transitions
Smooth mobile menu animations
Scale effect on CTA button


Professional CTA:

"Book a Consultation" button with gradient and arrow icon
Eye-catching but professional design


Responsive Design:

Mobile-optimized menu
Adapts to all screen sizes
Touch-friendly interactions


I'll help you create a professional Header component for your IT Consulting firm. Let me redesign it with a clean, trustworthy color scheme and improved structure.I've created a professional Header component for your IT Consulting firm with these key improvements:

## ✨ Key Features:

1. **Professional Color Scheme**:
   - Deep navy (#0F172A) for authority and trust
   - Professional blue (#3B82F6) for technology
   - Cyan accent (#06B6D4) for modern tech feel
   - Clean white background with subtle gradients

2. **Two-Tier Navigation**:
   - Top bar with contact info (email/phone) that slides away on scroll
   - Main navigation that becomes sticky with backdrop blur

3. **Enhanced Branding**:
   - Professional logo with gradient background
   - Company name with tagline
   - Consistent visual identity

4. **Smooth Interactions**:
   - Animated underline on nav items (kept from your original)
   - Hover effects with color transitions
   - Smooth mobile menu animations
   - Scale effect on CTA button

5. **Professional CTA**:
   - "Book a Consultation" button with gradient and arrow icon
   - Eye-catching but professional design

6. **Responsive Design**:
   - Mobile-optimized menu
   - Adapts to all screen sizes
   - Touch-friendly interactions

## 🎨 To Use in Your Project:

Replace your existing Header component with this code. The functionality you liked (animated nav items) is preserved, and I've added a more professional look suitable for an IT consulting firm.

The color scheme conveys trust, technology expertise, and professionalism—perfect for B2B consulting services!