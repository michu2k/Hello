# Hello
![Preview](./img/previewgithub.png?raw=true)

## Version
1.4.1

## Requirements
Batflat 1.3.x

## Changelog
![View changelog](./CHANGELOG.md)

## How to install
1. Download this repository
2. Unzip the downloaded files
3. Move catalog with theme to the `/themes` 
4. Configure template

## Configuration

### Author area
- Author name require `{$snippet.author-name}` snippet
- Author description require `{$snippet.author-description}` snippet.

### LangSwitcher
- Add `<li class="nav-item">{$langSwitcher}</li>` to the `.navbar-nav` container in `nav.html` file, if you want to use lang switcher on your site 

### Social icons
You can modify your social icons in the following files:
- Author area: `inc/social.html`
- Footer: `inc/social-footer.html`

You need to change LINK and ICON_NAME

```html
<a class="social-icon" href="LINK">
    <span class="fa fa-ICON_NAME" aria-hidden="true">
        <span class="sr-only">NAME</span>
    </span>
</a>
```

Icon names from: [Font Awesome](https://fontawesome.com/cheatsheet) 

### Footer
- Widget heading require `{$snippet.footer-widget-social}` snippet 

## Notes
- Debug bar and Carousel are not supported in this theme        