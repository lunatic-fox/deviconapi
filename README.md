
<div align="center">

# Devicon API

<a href="#">
  <img src="https://shields.io/badge/English-000dff">
</a>
<a href="docs/ptbr/README.md">
  <img src="https://shields.io/badge/Português%20do%20Brasil-008c15">
</a>
</div>


&nbsp; This project serves Devicon v2.15.1 icons¹ via API, that way you can edit the icon color and size on the fly.

> 1. *Only icons that can be converted to font, in other words, only monochromatic plain icons.*

## List of contents
[**1. Overview**](#overview)\
&nbsp; &nbsp; [**1.1. Selecting icon**](#11-selecting-icon)\
&nbsp; &nbsp; [**1.2. Selecting theme or color**](#12-selecting-theme-or-color)\
&nbsp; &nbsp; &nbsp; &nbsp; [**1.2.1. theme**](#121-theme)\
&nbsp; &nbsp; &nbsp; &nbsp; [**1.2.2. color**](#122-color)\
&nbsp; &nbsp; [**1.3. Selecting version**](#13-selecting-version)\
&nbsp; &nbsp; [**1.4. Resizing**](#14-resizing)\
[**2. Examples**](#2-examples)\
&nbsp; &nbsp; [**2.1. Markdown**](#21-markdown)\
&nbsp; &nbsp; [**2.2. HTML**](#22-html)\
&nbsp; &nbsp; [**2.3. Results**](#23-results)\
[**3. Dependencies**](#3-dependencies)

<div align="right">

[*back to top*](#devicon-api)
</div>

## 1. Overview
&nbsp; Use the base URL below to access the API.
```https
https://deviconapi.vercel.app/?
```
> *You can use `/api?` instead of `/?` at the end of the link if you want.*

<div align="center">

**Through this documentation this base URL will be referred as `<URL>/?`**
</div>

[***Jump to examples >>***](#2-examples)

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.1. Selecting icon
&nbsp; Just add the icon name after the base URL. If no other parameter is added it will return the default icon in its default color with 128×128px of size.

***Example***
```https
<URL>/?csharp
<URL>/?cplusplus
<URL>/?javascript
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2. Selecting theme or color
&nbsp; You can choose the color of the icon by adding the `theme` or `color` parameter, using `&` after the icon name.\
&nbsp; Is important to note that `theme` has priority over `color` parameter, so if both are present only `theme` will work.

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2.1. theme
&nbsp; This parameter receives `light` or `dark` as value. Therefore, if you are using the icon into a light scheme, selecting `light` will fill the icon with `#000000`. Otherwise, if the icon are in a dark scheme, by selecting `dark` the icon will be filled with `#ffffff`.

***Example using `dark`***\
&nbsp; Next.js icon filled in `#ffffff`
```https
<URL>/?nextjs&theme=dark
```

***Example using `light`***\
&nbsp; Next.js icon filled in `#000000`
```https
<URL>/?nextjs&theme=light
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.2.2. color
&nbsp; This parameter receives any hexadecimal color and CSS colors as value.

<div align="center">

**Note that hexadecimal colors can not have `#` on the request!**
</div>

&nbsp; Hexadecimal colors can be in any of the following patterns: `2ff`, `22ffff`, `abc5`, `aabbcc55`.

***Example using hexadecimal***\
&nbsp; JavaScript icon filled in `#ff5656`
```https
<URL>/?javascript&color=ff5656
```

***Example using CSS color***\
&nbsp; JavaScript icon filled in `#ff0000`
```https
<URL>/?javascript&color=red
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.3. Selecting version
&nbsp; Sometimes, icons are in different versions and you can specify which one you want by passing a version value to `version` parameter.

&nbsp; Possible version values are: `original`, `plain`, `line`,`original-wordmark`, `plain-wordmark` and `line-wordmark`.

<div align="center">

**Remember that this API works only with monochromatic icons.**\
**You can see all supported versions of each icon in this [list](./docs/list-of-icons-and-versions/README.md).**
</div>

***Example using `line`***\
&nbsp; Apache icon in `line` version where default is `plain`.
```https
<URL>/?apache&version=line
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 1.4. Resizing
&nbsp; If you are using Markdown you can resize the icon without add an `img` element with `width` attribute, for instance. Just add some value to the `size` parameter and you are ready to go.

***Example using 50px***\
&nbsp; Node.js icon in 50×50px.
```https
<URL>/?nodejs&size=50
```

<div align="right">

[*back to top*](#devicon-api)
</div>

## 2. Examples
### 2.1. Markdown
#### nodejs, dark theme, 80px
```markdown
![](https://deviconapi.vercel.app/?nodejs&theme=dark&size=80)
```
#### go, 180px, #f0f
```markdown
![](https://deviconapi.vercel.app/?go&size=180&color=f0f)
```
#### go, original-wordmark, 180px
```markdown
![](https://deviconapi.vercel.app/?go&version=original-wordmark&size=180)
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 2.2. HTML
#### nodejs, dark theme, 80px
```html
<img src="https://deviconapi.vercel.app/?nodejs&theme=dark&size=80"/>
```
#### go, 180px, #f0f
```html
<img src="https://deviconapi.vercel.app/?go&size=180&color=f0f"/>
```
#### go, original-wordmark, 180px
```html
<img src="https://deviconapi.vercel.app/?go&version=original-wordmark&size=180"/>
```

<div align="right">

[*back to top*](#devicon-api)
</div>

### 2.3. Results
#### nodejs, dark theme, 80px
![nodejs](https://deviconapi.vercel.app/?nodejs&theme=dark&size=80)

#### go, 180px, #f0f
![go](https://deviconapi.vercel.app/?go&size=180&color=f0f)

#### go, original-wordmark, 180px
![go](https://deviconapi.vercel.app/?go&version=original-wordmark&size=180)

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