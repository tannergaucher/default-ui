# Semantic Styles

## Responsive, Themed, UI Design System.

### Features:

- Responsive typography and spacing
- Calculated, adjustable vertical rhythm
- Responsive light / dark theme (toggle your OS light / dark mode to see)
- Classes that match semantic HTML elements
- Framework agnostic

### [View Demo](https://semantic-styles.netlify.com/)

---

## Getting Started

### How to use:

1. Install
2. Import system classes and variables at the top level of your app
3. Compose components from system classes and variables + HTML
4. Customize by overriding system classes and variables with local styles

### 1: Install

```
npm install semantic-styles
```

### 2: Import system classes and variables as global CSS

### React + Gatsby example

```jsx
// Gatsby <Layout/>

import React from 'react'
import 'semantic-styles'

export default ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
```

### HTML + CSS + Parcel example

```html
<!-- index.html -->

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic Styles</title>
  </head>
  <body>
    HTML & CSS + Parcel Example
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

```js
// index.js

import 'semantic-styles'
```

```
<!-- Builds semantic styles into dist folder  -->

parcel index.html
```

### 3: Compose components with system classes, system CSS variables, and HTML

```js
// Gatsby <Layout/>

import React from 'react'
import 'semantic-styles'

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
          background: `var(--accent-1)`,
        }}
      >
        <h4
          style={{
            padding: `var(--space-xl)`,
            fontFamily: `var(--serif)`,
          }}
        >
          Colorful Footer
        </h4>
      </footer>
    </>
  )
}
```

---

### 4: How to customize

Embrace the cascade.

```js
// global system styles
import 'semantic-styles'

// local overrides
import '../styles/local-semantic-styles.css'
```

```css
/* local-semantic-styles.css */

/* Customized system variables */
:root {
  --accent-1: lime;
  --responsive-unit: 2rem;
}
```

---

## Classes

### Element Classes

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

### Component Classes

- `.card`
- `.card-text`
- `.card-heading`
- `.nav-link`

---

### Layout Classes

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

### Typography Classes

- `.text--xs`
- `.text--sm`
- `.text--md`
- `.text--lg`
- `.text--xl`
- `.text--xxl`
- `.text--xxxl`

---

## Variables

### Color Variables

- `--text-color`
- `--bg-1`
- `--bg-2`
- `--grey`
- `--accent-1`
- `--accent-2`
- `--code-bg`

---

### Component Variables

- `--radius`
- `--thickness`
- `--elevation-1`
- `--elevation-2`
- `--elevation-3`
- `--transition`
- `--opacity`

---

### Layout Variables

- `--container`
- `--max-width`

---

### Typography Variables

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

### Scale Variables

- `--responsive-unit`
- `--baseline`

---

### Spacing Variables

- `--space-sm`
- `--space-md`
- `--space-lg`
- `--space-xl`

---
