
<div align="center">

# Devicon API

<a href="../../README.md">
  <img src="https://shields.io/badge/English-000dff">
</a>
<a href="#">
  <img src="https://shields.io/badge/Português%20do%20Brasil-008c15">
</a>
</div>

&emsp;Este projeto serve os ícones¹ Devicon v2.15.1 via API, dessa forma você pode editar a cor do ícone e o tamanho em tempo real.

> 1. *Apenas ícones que podem ser convertidos para fonte, em outras palavras, apenas ícones simples monocromáticos.*

## Lista de conteúdos
[**1. Visão geral**](#1-visão-geral)\
&emsp;[**1.1. Selecionando o ícone**](#11-selecionando-o-ícone)\
&emsp;[**1.2. Selecionando o tema ou a cor**](#12-selecionando-o-tema-ou-a-cor)\
&emsp;&emsp;[**1.2.1. tema**](#121-tema)\
&emsp;&emsp;[**1.2.2. cor**](#122-cor)\
&emsp;[**1.3. Selecionando a versão**](#13-selecionando-a-versão)\
&emsp;[**1.4. Redimensionando**](#14-redimensionando)\
[**2. Exemplos**](#2-exemplos)\
&emsp;[**2.1. Markdown**](#21-markdown)\
&emsp;[**2.2. HTML**](#22-html)\
&emsp;[**2.3. Resultados**](#23-resultados)\
[**3. Dependências**](#3-dependências)

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

## 1. Visão geral
&emsp;Use a URL base abaixo para acessar a API.
```https
https://deviconapi.vercel.app/?
```
> *Você pode usar `/api?` no lugar de `/?` ao final do link se desejar.*

<div align="center">

**Ao longo desta documentação esta URL base será referenciada como `<URL>/?`**
</div>

[***Pular para exemplos >>***](#2-exemplos)

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.1. Selecionando o ícone
&emsp;Apenas adicione o nome do ícone após a URL base. Se nenhum outro parâmetro é adicionado será retornado o ícone padrão na sua cor padrão com 128×128px de tamanho.

***Exemplo***
```https
<URL>/?csharp
<URL>/?cplusplus
<URL>/?javascript
```

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.2. Selecionando o tema ou a cor
&emsp;Você pode escolher a cor do ícone adicionando o parâmetro `theme` ou `color`, usando `&` após o nome do ícone.\
&emsp;É importante notar que o parâmetro `theme` tem prioridade sobre `color`, então se ambos estão presentes apenas `theme` irá funcionar.

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.2.1. tema
&emsp;Este parâmetro recebe `light` ou `dark` como valores. Portanto, se você estiver usando o ícone dentro de um esquema claro, selecionando `light` preencherá o ícone com `#000000`. Pelo contrário, se o ícone estiver em um esquema escuro, selecionando `dark` o ícone será preenchido com `#ffffff`.


***Exemplo usando `dark`***\
&emsp;Ícone Next.js preenchido em `#ffffff`
```https
<URL>/?nextjs&theme=dark
```

***Exemplo usando `light`***\
&emsp;Ícone Next.js preenchido em `#000000`
```https
<URL>/?nextjs&theme=light
```

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.2.2. cor
&emsp;Este parâmetro recebe qualquer cor hexadecimal e cores CSS como valor.

<div align="center">

**Note que cores hexadecimais não podem ter `#` na requisição!**
</div>

&emsp;Cores hexadecimais podem estar em qualquer dos seguintes padrões: `2ff`, `22ffff`, `abc5`, `aabbcc55`.

***Exemplo usando hexadecimal***\
&emsp;Ícone JavaScript preenchido em `#ff5656`
```https
<URL>/?javascript&color=ff5656
```

***Exemplo usando cor CSS***\
&emsp;Ícone JavaScript preenchido em `#ff0000`
```https
<URL>/?javascript&color=red
```

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.3. Selecionando a versão
&emsp;Às vezes, ícones estão em diferentes versões e você pode especificar qual você quiser passando um valor de versão para o parâmetro `version`.

&emsp;Possíveis valores de versão são: `original`, `plain`, `line`,`original-wordmark`, `plain-wordmark` e `line-wordmark`.

<div align="center">

**Lembre-se que esta API funciona apenas com ícones monocromáticos.**\
**Você pode ver todas as versões suportadas de cada ícone nesta [lista](./list-of-icons-and-versions/README.md).**
</div>

***Exemplo usando `line`***\
&emsp;Ícone Apache na versão `line` onde o padrão é `plain`.
```https
<URL>/?apache&version=line
```

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

### 1.4. Redimensionando
&emsp;Se você está usando Markdown você pode redimensionar o ícone sem adicionar um elemento `img` com o atributo `width`, por exemplo. Apenas adicione algum valor para o parâmetro `size` e já pode seguir adiante.

***Exemplo usando 50px***\
&emsp;Ícone Node.js em 50×50px.
```https
<URL>/?nodejs&size=50
```

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

## 2. Exemplos
### 2.1. Markdown
#### nodejs, tema escuro, 80px
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

[*voltar ao topo*](#devicon-api)
</div>

### 2.2. HTML
#### nodejs, tema escuro, 80px
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

[*voltar ao topo*](#devicon-api)
</div>

### 2.3. Resultados
#### nodejs, tema escuro, 80px
![nodejs](https://deviconapi.vercel.app/?nodejs&theme=dark&size=80)

#### go, 180px, #f0f
![go](https://deviconapi.vercel.app/?go&size=180&color=f0f)

#### go, original-wordmark, 180px
![go](https://deviconapi.vercel.app/?go&version=original-wordmark&size=180)

<div align="right">

[*voltar ao topo*](#devicon-api)
</div>

## 3. Dependências
  * [**axios**](https://www.npmjs.com/package/axios)
  * [**text-to-svg**](https://www.npmjs.com/package/text-to-svg)

<div align="center">

**Baseado em [Devicon](https://github.com/devicons/devicon) e distribuído por [Vercel](https://vercel.com/)**\
**Feito com ❤ por [Josélio Júnior (Lunatic Fox)](https://github.com/lunatic-fox)**
</div>