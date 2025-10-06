# Lotus Hugo Theme

A modern, clean documentation theme for Hugo, designed for the Lotus project.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark Mode** - Built-in dark/light theme toggle with localStorage persistence
- **Code Highlighting** - Syntax highlighting with tabbed code blocks for multiple languages
- **Table of Contents** - Automatic ToC generation for long pages
- **Breadcrumbs** - Clear navigation hierarchy
- **Search** - Built-in search functionality
- **Multilingual Support** - Ready for multiple languages
- **Clean UI** - Modern, minimal design focused on content

## Installation

### As a Hugo Module

```bash
hugo mod get github.com/yourusername/lotus-theme
```

Then add to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/lotus-theme"
```

### As a Git Submodule

```bash
git submodule add https://github.com/yourusername/lotus-theme.git themes/lotus
```

Then add to your `config.toml`:

```toml
theme = "lotus"
```

### Manual Installation

Download the theme and place it in your `themes/` directory.

## Configuration

Example `config.toml`:

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Lotus Docs"
theme = "lotus"

[params]
  description = "Documentation for Lotus"

  [params.social]
    github = "https://github.com/filecoin-project/lotus"
    twitter = "https://twitter.com/lotus_web3"
    slack = "https://filecoin.io/slack"

[[menus.main]]
  name = "Lotus"
  url = "/lotus/"
  weight = 10

[[menus.main]]
  name = "Storage Providers"
  url = "/storage-providers/"
  weight = 20

[[menus.main]]
  name = "Tutorials"
  url = "/tutorials/"
  weight = 30

[[menus.docs]]
  name = "Get started"
  identifier = "get-started"
  weight = 10

[[menus.docs]]
  name = "What is Lotus"
  parent = "get-started"
  url = "/lotus/what-is-lotus/"
  weight = 11
```

## Content

Create your content in the `content/` directory:

```markdown
---
title: "What is Lotus"
lead: "A brief introduction to Lotus"
toc: true
---

Your content here...
```

### Front Matter Options

- `title` - Page title
- `lead` - Subtitle/lead text
- `toc` - Enable/disable table of contents (default: true)
- `weight` - For ordering in lists

## Development

To develop this theme locally:

1. Clone the repository
2. Create example content in `exampleSite/`
3. Run `hugo server` from the theme directory

## License

MIT
