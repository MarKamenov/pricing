# React Vite Storybook Pricing Project

![Vite](https://img.shields.io/badge/Vite-4.x-blueviolet?style=flat&logo=vite)
![React](https://img.shields.io/badge/React-18.x-blue?style=flat&logo=react)
![Storybook](https://img.shields.io/badge/Storybook-7.x-FF4785?style=flat&logo=storybook)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel)

A React project bootstrapped with **Vite**, featuring **Storybook** for UI component development.

## 🚀 Features

- ⚡ **Vite** for fast development and builds
- 🏗 **React** (latest version)
- 🟦 **TypeScript** for static typing
- 📖 **Storybook** for UI component development
- 💅 **SCSS Modules /** support
- 🃏 **Jest / React Testing Library** 
- 🚀 **Deployed on Vercel**

---

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/MarKamenov/pricing.git
cd pricing
yarn
```

## 🔥 Running the Project

```sh
yarn dev
```

## 📖 Running Storybook

```sh
yarn storybook
```

## 🛠️ Running Tests

```sh
yarn test
```

## 📦 Build for Production

```sh
yarn build
```

## 🌍 Deployment

This project is deployed on Vercel and can be accessed at: [https://pricing-chi.vercel.app/pricing](https://pricing-chi.vercel.app/pricing)

## Features in Detail

- **Responsive Design**: Mobile-friendly approach
- **Theme Switching**: Seamless dark/light theme toggle with persistent state
- **Accessible**: ARIA labels, keyboard navigation, and screen reader support

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 📜 License
This project is licensed under the MIT License.