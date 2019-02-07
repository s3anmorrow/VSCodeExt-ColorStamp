# Status Color Stamp

This extension is for developers who typically have multiple VS Code windows open with different projects. It enables a quick and easy way to change the status bar color of each window for identification.

## Features

CHANGED!! Change the color of the status bar to any of eight preset colors or your own color with a provided hexidecimal color code (#FF0000). The set status bar color will persist in the current project folder (workspace).

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Usage

After Installation press `Ctrl+Shift+P` and type in `Color StatusBar`. Select from a series commands to set the color.

It does this by setting the project folder's (workspace) configuration in .vscode/settings.json:

```
"workbench.colorCustomizations": {
    "statusBar.background": "#FF0000"
}
```

**Enjoy!**