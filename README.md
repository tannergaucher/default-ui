# Default UI

---

## Themed Design System for HTML Elements

- 1. (Have AI) write HTML

- 2. Import package

- 3. Get themed, responsive styles

---

## Themes

### Light

### Light Sepia

### Dark

### Dark Sepia

---

## How To Use Themes

### 1. Import package

```

npm i @t_g/default-ui

```

### 2. Add a button label to the document with an aria label of "Toggle theme"

```html
<button arial-label="Toggle theme">Theme</button>
```

### 3. Optionally: select a subset of themes using data-themes attribute

```html
<button aria-label="Toggle theme" data-toggle="Light Theme,Dark Sepia Theme">
  Theme
</button>
```
