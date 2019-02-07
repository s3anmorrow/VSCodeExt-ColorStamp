# Color Stamp

This extension is for developers who typically have multiple VS Code windows open with different projects. It enables a quick and easy way to change the status bar color of each window for identification.

## Features

Change the color of the status bar to any of eight preset colors or your own color with a provided hexidecimal color code (#FF0000). The set status bar color will persist in the current workspace.


## Usage

After Installation press `Ctrl+Shift+P` and type in `Color Stamp`. Select from a series commands to set the color.

![Usage Animated Gif](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

The extension works by setting the workspace's configuration in .vscode/settings.json:

```
"workbench.colorCustomizations": {
    "statusBar.background": "#FF0000"
}
```

## Commands

* Color Stamp : ?
* Color Stamp : Blue
* Color Stamp : Red
* Color Stamp : Green
* Color Stamp : Yellow
* Color Stamp : Orange
* Color Stamp : Purple
* Color Stamp : Silver
* Color Stamp : Khaki
* Color Stamp : X