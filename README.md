<div align="center">

# Devicon API v1.1.0 ![](https://deviconapi.vercel.app/?devicon&size=40)

<a href="#">
  <img src="https://shields.io/badge/English-000dff">
</a>
<a href="docs/ptbr/README.md">
  <img src="https://shields.io/badge/Português%20do%20Brasil-008c15">
</a>
</div>

---
<div align="center">

### [Devicon API - Interface](https://lunaticfox.vercel.app/deviconApi)
An interface page to select the icons.
</div>

---

&emsp;This project serves [Devicon](https://github.com/devicons/devicon) v2.15.1 icons¹ via API, that way you can edit the icon color and size on the fly.

> 1. *Only icons that can be converted to font, in other words, only monochromatic plain icons.*

## List of contents
[**1. Overview**](#overview)\
&emsp;[**1.1. Selecting icon**](#11-selecting-icon)\
&emsp;[**1.2. Selecting theme or color**](#12-selecting-theme-or-color)\
&emsp;&emsp;[**1.2.1. theme**](#121-theme)\
&emsp;&emsp;[**1.2.2. color**](#122-color)\
&emsp;[**1.3. Selecting version**](#13-selecting-version)\
&emsp;[**1.4. Resizing**](#14-resizing)\
[**2. Examples**](#2-examples)\
&emsp;[**2.1. Markdown**](#21-markdown)\
&emsp;[**2.2. HTML**](#22-html)\
&emsp;[**2.3. Results**](#23-results)\
[**3. Dependencies**](#3-dependencies)

<div align="right">

[*back to top*](#devicon-api)
</div>

## 1. Overview
&emsp;Use the base URL below to access the API.
```https
https://deviconapi.vercel.app/
```

<div align="center">

**Through this documentation this base URL will be referred as `<URL>/`**
</div>

[***Jump to examples >>***](#2-examples)

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.1. Selecting icon
&emsp;Just add the icon name after the base URL. If no other parameter is added it will return the default icon in its default color with 128×128px of size.

***Example***
```https
<URL>/csharp
<URL>/cplusplus
<URL>/javascript
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2. Selecting theme or color
&emsp;You can choose the color of the icon by adding the `theme` or `color` parameter, using `&` after the icon name.\
&emsp;Is important to note that `theme` has priority over `color` parameter, so if both are present only `theme` will work.

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2.1. theme
&emsp;This parameter receives `light` or `dark` as value. 

&emsp;In GitHub markdown you should use a wrapping logic. See the example below.

***Example***
```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://deviconapi.vercel.app/devicon?theme=dark&size=50">
  <img alt="Devicon" title="Devicon" src="https://deviconapi.vercel.app/devicon?theme=light&size=50">
</picture>
```

***Result***
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://deviconapi.vercel.app/devicon?theme=dark&size=50">
    <img alt="Devicon" title="Devicon" src="https://deviconapi.vercel.app/devicon?theme=light&size=50">
  </picture>
</div>

---

&emsp;A dark color scheme is defined in `source.media` and `srcset` points to a dark themed icon `#ffffff`. If `source.media` is false, then the inner `img` will be shown instead and `src` should be pointing to a light themed icon `#000000`.

***Example using `dark`***\
&emsp;Next.js icon filled in `#ffffff`
```https
<URL>/nextjs?theme=dark
```

***Example using `light`***\
&emsp;Next.js icon filled in `#000000`
```https
<URL>/nextjs?theme=light
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2.2. color
&emsp;This parameter receives any hexadecimal color and CSS colors as value.

<div align="center">

**Note that hexadecimal colors can not have `#` on the request!**
</div>

&emsp;Hexadecimal colors can be in any of the following patterns: `2ff`, `22ffff`, `abc5`, `aabbcc55`.

***Example using hexadecimal***\
&emsp;JavaScript icon filled in `#ff5656`
```https
<URL>/javascript?color=ff5656
```

***Example using CSS color***\
&emsp;JavaScript icon filled in `#ff0000`
```https
<URL>/javascript?color=red
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.3. Selecting version
&emsp;Sometimes, icons are in different versions and you can specify which one you want by passing a version value to `version` parameter.

&emsp;Possible version values are: `original`, `plain`, `line`,`original-wordmark`, `plain-wordmark` and `line-wordmark`.

<div align="center">

**Remember that this API works only with monochromatic icons.**\
**You can see all supported versions of each icon in this [list](./docs/list-of-icons-and-versions/README.md).**
</div>

***Example using `line`***\
&emsp;Apache icon in `line` version where default is `plain`.
```https
<URL>/apache?version=line
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.4. Resizing
&emsp;If you are using Markdown you can resize the icon without add an `img` element with `width` attribute, for instance. Just add some value to the `size` parameter and you are ready to go.

***Example using 50px***\
&emsp;Node.js icon in 50×50px.
```https
<URL>/nodejs?size=50
```

<div align="right">

[*back to top*](#devicon-api)
</div>

## 2. Examples
### 2.1. Markdown
#### nodejs, dark theme, 80px
```markdown
![](https://deviconapi.vercel.app/nodejs?theme=dark&size=80)
```
#### go, 180px, #f0f
```markdown
![](https://deviconapi.vercel.app/go?size=180&color=f0f)
```
#### go, original-wordmark, 180px
```markdown
![](https://deviconapi.vercel.app/go?version=original-wordmark&size=180)
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 2.2. HTML
#### nodejs, dark theme, 80px
```html
<img src="https://deviconapi.vercel.app/nodejs?theme=dark&size=80"/>
```
#### go, 180px, #f0f
```html
<img src="https://deviconapi.vercel.app/go?size=180&color=f0f"/>
```
#### go, original-wordmark, 180px
```html
<img src="https://deviconapi.vercel.app/go?version=original-wordmark&size=180"/>
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 2.3. Results

<table>
  <thead>
    <th>Description</th>
    <th>Result</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>nodejs</b><br>
        <b>theme:</b> dark<br>
        <b>size:</b> 80px
      </td>
      <td align="center">
        <img title="Node.js icon" alt="nodejs" src="https://deviconapi.vercel.app/nodejs?theme=dark&size=80">
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <i>https://deviconapi.vercel.app/nodejs?theme=dark&size=80</i>
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <th>Description</th>
    <th>Result</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>github</b><br>
        <b>color:</b> #2ea043<br>
        <b>size:</b> 180px
      </td>
      <td align="center">
        <img title="GitHub icon" alt="github" src="https://deviconapi.vercel.app/github?color=2ea043&size=180">
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <i>https://deviconapi.vercel.app/github?color=2ea043&size=180</i>
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <th>Description</th>
    <th>Result</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>github</b><br>
        <b>version:</b> original-wordmark<br>
        <b>color:</b> #1f6feb<br>
        <b>size:</b> 180px
      </td>
      <td align="center">
        <img title="GitHub (wordmark) icon" alt="github" src="https://deviconapi.vercel.app/github?version=original-wordmark&color=1f6feb&size=180">
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <i>https://deviconapi.vercel.app/github?version=original-wordmark&color=1f6feb&size=180</i>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">

[*back to top*](#devicon-api)
</div>

## 3. Dependencies
  * [**axios**](https://www.npmjs.com/package/axios)
  * [**text-to-svg**](https://www.npmjs.com/package/text-to-svg)

<div align="center">

**Based in [Devicon](https://github.com/devicons/devicon) and powered by [Vercel](https://vercel.com/)**\
**Made with ❤ by [Josélio Júnior (Lunatic Fox)](https://github.com/lunatic-fox)**
</div>
