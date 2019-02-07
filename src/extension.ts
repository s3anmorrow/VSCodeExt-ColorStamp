// color theme : blink (rainglow)

// MANUAL APPROACH
// https://medium.com/@camdenb/colorful-vscode-titlebars-for-better-productivity-b05a619defed
// THEME COLOR CHANGING
// https://code.visualstudio.com/api/references/theme-color
// SAMPLES
// https://marketplace.visualstudio.com/items?itemName=RolandGreim.sample-ext

// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

async function updateConfig(enteredColor: any) {
	// if user pressed ESC to cancel
	if (enteredColor === undefined) {
		return;
	} 

	// get reference to workspace configuration and set titleBar color
	let config:vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration();
	let value:Object;
	if (enteredColor !== "default") {
		value = {
			//"titleBar.activeBackground": enteredColor,
			"statusBar.background": enteredColor
		};
	} else {
		value = {};
	}
	// undefined so it only updates the workspace configurations and not globally
	// updates the .vscode/settings.json file of project folder
	await config.update("workbench.colorCustomizations", value, undefined);
}

async function colorMe(color?:string) {

	// check if VS Code has project folder open - if not this extension does nothing :(
	if (vscode.workspace.workspaceFolders === undefined) {
		vscode.window.showErrorMessage("Error : No project folder (workspace) opened");
		return;
	}

	if (color === "default") {
		updateConfig("default");	
	} else if (color === undefined) {
		// color hexcode input required from user
		// regular expression to validate hex color user input
		let regex:RegExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
		// getting color hexcode input from user
		let options:vscode.InputBoxOptions = {
			password: false,
			placeHolder: "#FF0000",
			prompt: "Enter a Color Hex Code :)",
			validateInput: (text: string) => {
				if (!text.match(regex)) {
					return "Invalid Hex Code :(";
				} else {
					return null;
				}
			}
		};
		vscode.window.showInputBox(options).then((enteredColor:any) => updateConfig(enteredColor));
	} else {
		updateConfig(color);
	}
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// setup VS Code Commands
	let commands = [
		vscode.commands.registerCommand('extension.statusColorStamp', () => colorMe()),
		vscode.commands.registerCommand('extension.statusColorStamp-Blue', () => colorMe("#3399FF")),
		vscode.commands.registerCommand('extension.statusColorStamp-Red', () => colorMe("#C60909")),
		vscode.commands.registerCommand('extension.statusColorStamp-Green', () => colorMe("#19A119")),
		vscode.commands.registerCommand('extension.statusColorStamp-Yellow', () => colorMe("#DAD70E")),
		vscode.commands.registerCommand('extension.statusColorStamp-Orange', () => colorMe("#E49427")),
		vscode.commands.registerCommand('extension.statusColorStamp-Purple', () => colorMe("#7C21D7")),
		vscode.commands.registerCommand('extension.statusColorStamp-Silver', () => colorMe("#C0C0C0")),
		vscode.commands.registerCommand('extension.statusColorStamp-Khaki', () => colorMe("#F0E68C")),
		vscode.commands.registerCommand('extension.statusColorStamp-Default', () => colorMe("default"))
	];

	context.subscriptions.concat(commands);




	/*
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable:vscode.Disposable = vscode.commands.registerCommand('extension.colorBar', () => {

		// check if VS Code has project folder open - if not this extension does nothing :(
		if (vscode.workspace.workspaceFolders === undefined) {
			vscode.window.showErrorMessage("colorMe Error : No project folder (workspace) opened");
		} else {
			colorTitleBar();
		}


		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
	*/
}

// this method is called when your extension is deactivated
export function deactivate() {}
