# Semantic Styles

## A CSS Design System for Rapid, Responsive UI Prototyping (WIP)

[View Demo](https://semantic-styles.netlify.com/)

---

## Getting Started

### How to use:

1. Install
2. Import system styles and root variables in the top level of your app
3. Compose components with system classes and variables + HTML

### 1: Install

```
npm install semantic styles
```

### 2: Import the design system as global CSS

```jsx
// Example Gatsby <Layout/>

import React from "react";

import "semantic-styles";

export default ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
```

### 3: Compose components with system classes, system CSS variables, and HTML

```js
// Example Gatsby <Layout/>

import React from "react";

import "semantic-styles";

export default ({ children }) => {
  return (
    <>
      <header className="header padding">
        <h1 className="text--xxxl">Very Large Title</h1>
      </header>
      <main className="main">{children}</main>
      <footer
        className="footer"
        style={{
          background: `var(--accent-1)`
        }}
      >
        <h4 style={{ color: `var(--accent-2)` }}>Colorful Footer</h4>
      </footer>
    </>
  );
};
```

---

## Classes

### Elements

- `.aside`
- `.btn`
- `.btn-primary`
- `.code`
- `.fieldset`
- `.figcaption`
- `.figure`
- `.footer`
- `.form`
- `.header`
- `.input`
- `.main`
- `.nav`
- `.textarea`

---

### Components

- `.card`
- `.card-text`
- `.card-heading`
- `.nav-link`

---

### Layout

- `.center`
- `.container`
- `.content-grid`
- `.aside-content-grid`
- `.content-aside-grid`
- `.image-grid`
- `.content`
- `.none`
- `.padding`
- `.page`
- `.only-mobile-padding`
- `.only-fullscreen-padding`

---

### Typography

- `.site-title`
- `.text--xs`
- `.text--sm`
- `.text--md`
- `.text--lg`
- `.text--xl`
- `.text--xxl`
- `.text--xxxl`

---

## Variables

### Colors

- `--text-color`
- `--bg-1`
- `--bg-2`
- `--grey`
- `--accent-1`
- `--accent-2`
- `--code-bg`

---

### Components

- `--radius`
- `--thickness`
- `--elevation-1`
- `--elevation-2`
- `--elevation-3`
- `--transition`
- `--opacity`

---

### Layout

- `--container`
- `--max-width`

---

### Typography

- `--sans`
- `--serif`
- `--mono`
- `--heading-line-height`
- `--heading-letter-spacing`
- `--paragraph-letter-spacing`
- `--caps-letter-spacing`
- `--text-sm`
- `--text-md`
- `--text-lg`
- `--text-xl`
- `--text-xxl`
- `--text-xxxl`

---

### Scale

- `--responsive-unit`
- `--baseline`

---

### Spacing

- `--space-sm`
- `--space-md`
- `--space-lg`
- `--space-xl`

---
