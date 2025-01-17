# Syntax of CSS Styling

```css
selector {
    property: value;
}
```

## Universal Selector - Style every element on your web page

```css
* { }
```

## Element selector

style all paragraphs on the web page

```css
p { }
```

style all images on the web page

```css
img { }
```

style all headings on the web page

```css
h1 { }
```

style all tables on the web page

```css
table { }
```

## Class Selector

`.home-section { }`

## ID Selector

```css
#home { }
```

## Attribute Selector

Selects a particular attribute from a html tag.

Example:

```css
a[href="https://google.com"] {
    property: value;
}
```

## Group Selector

Seperated by comma. And styles all these elements in the same way.

```css
p, h1, h2, h3 { }
```

## Pseudo-class Selector

Styles a specific state (mouse hover, focus, click).

```css
a :hover { }
```

```css
input :focus { }
```

## How To Add CSS Style to a HTML Document

1. Inline Styling. Using the `style=""` atrribute.
2. Internal Styling or Embeded CSS. Using the `<style>` element/tag. This element should be inside the `<head>` of the web page.
3. External styling. using the `<link>` tag. Example: `<link type="text/css" rel="stylesheet" href="style.css">`.

## Priority In CSS Styling

1. Inline style
2. ID selector
3. Class sector, attribute, pseudo-class
4. Element selector
5. Universal selector
