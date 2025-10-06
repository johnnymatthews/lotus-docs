# Lotus Theme Setup Guide

This guide will help you get started with the Lotus Hugo theme.

## Quick Start

### 1. Test the Example Site

The easiest way to see the theme in action is to use the included example site:

```bash
cd lotus-theme/exampleSite
hugo server
```

Then open `http://localhost:1313` in your browser.

### 2. Create a New Hugo Site

If you're starting from scratch:

```bash
# Create a new Hugo site
hugo new site my-lotus-docs
cd my-lotus-docs

# Copy the theme
cp -r /path/to/lotus-theme themes/lotus

# Copy the example config
cp themes/lotus/exampleSite/config.toml .

# Copy example content
cp -r themes/lotus/exampleSite/content .

# Start the server
hugo server
```

### 3. Using with an Existing Site

If you have an existing Hugo site:

```bash
# Copy the theme
cp -r /path/to/lotus-theme themes/lotus

# Update your config.toml
echo 'theme = "lotus"' >> config.toml
```

## Configuration

### Basic Config (config.toml)

```toml
baseURL = "https://yoursite.com/"
languageCode = "en-us"
title = "Your Site Title"
theme = "lotus"

[params]
  description = "Your site description"

  [params.social]
    github = "https://github.com/yourorg"
    twitter = "https://twitter.com/yourhandle"
    slack = "https://yourslack.com"
```

### Navigation Menus

#### Main Navigation (Header)

```toml
[[menus.main]]
  name = "Documentation"
  url = "/docs/"
  weight = 10

[[menus.main]]
  name = "Blog"
  url = "/blog/"
  weight = 20
```

#### Sidebar Documentation Menu

```toml
# Parent section
[[menus.docs]]
  name = "Getting Started"
  identifier = "getting-started"
  weight = 10

# Child pages
[[menus.docs]]
  name = "Introduction"
  parent = "getting-started"
  url = "/docs/introduction/"
  weight = 11
```

## Content

### Creating Pages

Create markdown files in the `content/` directory:

```bash
hugo new docs/my-page.md
```

### Front Matter

```yaml
---
title: "Page Title"
lead: "A short description or subtitle"
toc: true  # Enable table of contents
weight: 10 # For ordering in lists/menus
---

Your content here...
```

### Code Blocks

Standard markdown code blocks work automatically:

\`\`\`go
package main

func main() {
    println("Hello, World!")
}
\`\`\`

## Features

### Dark Mode

The theme includes automatic dark mode support with localStorage persistence. Users can toggle between light and dark themes using the button in the header.

### Search

The search functionality is built-in. Add your search configuration to enable it fully.

### Multilingual

To enable multiple languages, add to your `config.toml`:

```toml
[languages]
  [languages.en]
    languageName = "English"
    weight = 1

  [languages.es]
    languageName = "Español"
    weight = 2
```

## Customization

### Custom CSS

Create `assets/css/custom.css` in your site root and it will be automatically included.

### Custom JavaScript

Create `assets/js/custom.js` in your site root for additional functionality.

### Override Templates

Copy any template from `themes/lotus/layouts/` to your site's `layouts/` directory to override it.

## Troubleshooting

### Theme not found

Make sure the theme is in `themes/lotus/` and your config has `theme = "lotus"`.

### Menu not showing

Check that your menu items have the correct `menu` parameter in front matter or config.

### Styles not loading

Run `hugo server --disableFastRender` to force a full rebuild.

## Support

For issues and questions:
- Check the example site configuration
- Review the Hugo documentation: https://gohugo.io/documentation/
- Open an issue on GitHub
