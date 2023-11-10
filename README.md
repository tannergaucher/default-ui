# Default UI

---

## Themed Design System for HTML Elements

- Step 1. (Have AI) write HTML

- Step 2. Import package

- Step 3. Get responsive, themed HTML elements by default

---

## Supported Themes

### Light

### Light Sepia

### Dark

### Dark Sepia

---

## How To Use Themes

### 1. Install and import package into project

```shell
npm i @t_g/default-ui
```

### 2. Add a button to the document with an aria label of "Toggle theme" to toggle between all themes

```html
<button arial-label="Toggle Theme" />
```

### 3. Optionally toggle a subset of themes using data-themes attribute, comma separated

```html
<button aria-label="Toggle Theme" data-toggle="Light Theme,Dark Sepia Theme" />
```
