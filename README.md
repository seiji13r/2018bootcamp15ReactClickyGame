# React Clicky Game <!-- omit in toc --> 

- [Introduction](#introduction)
- [Notes & Reeferences](#notes--reeferences)
  - [Deploy on Github Pages](#deploy-on-github-pages)

# Introduction

[Live Site](https://seiji13r.github.io/2018bootcamp15reactclickygame/)

# Notes & Reeferences

```css
.shake {
    -webkit-animation: shake .5s .0125s;
    animation: shake .5s .0125s;
}

.click-item {
    background-size: cover;
    background-position: 50%;
    height: 170px;
    width: 170px;
    margin: 8px 25px;
    border: 5px solid #f1f1f1;
    border-radius: 3px;
    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
    cursor: pointer;
}
```

## Deploy on Github Pages
```bash
# Install gh-pages
npm install --save gh-pages 
```

[Deploy to github pages](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d) 