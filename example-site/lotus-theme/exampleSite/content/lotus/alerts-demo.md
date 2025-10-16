---
title: "Alerts Demo"
lead: "Examples of different alert types available in the Lotus theme"
toc: false
weight: 100
---

This page demonstrates the different alert types available in the theme.

## Warning Alert

{{< alert icon="warning" >}}
The Legacy Lotus/Lotus-Miner Markets sub-system reached EOL at the [end of the 31st January 2023](https://github.com/filecoin-project/lotus/releases/tag/v1.18.0). It has been fully removed from the Lotus/Lotus-Miner codebase as of 10th June 2024. We recommend our users to use the [Boost markets sub-system](https://github.com/filecoin-project/boost) instead.
{{< /alert >}}

## Info Alert

{{< alert icon="info" >}}
This is an informational alert. Use this to provide helpful context or additional information that users should be aware of. You can include **markdown formatting** and [links](https://example.com).
{{< /alert >}}

## Danger Alert

{{< alert icon="danger" >}}
**Critical:** This operation will permanently delete all data. This action cannot be undone. Make sure you have created a backup before proceeding.
{{< /alert >}}

## Tip Alert

{{< alert icon="tip" >}}
**Pro tip:** You can speed up the build process by using the `--parallel` flag. This enables concurrent processing and can reduce build times by up to 50%.
{{< /alert >}}

## Usage

To use alerts in your content, use the following shortcode syntax:

```markdown
{{</* alert icon="warning" */>}}
Your alert content here. Supports **markdown**.
{{</* /alert */>}}
```

Available icon types:
- `warning` - Yellow/amber colored alert for warnings
- `info` - Blue colored alert for informational messages
- `danger` - Red colored alert for critical warnings
- `tip` - Green colored alert for helpful tips
