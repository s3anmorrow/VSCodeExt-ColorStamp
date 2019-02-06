// color theme : overflow (rainglow)

// MANUALLY APPROACH
// https://medium.com/@camdenb/colorful-vscode-titlebars-for-better-productivity-b05a619defed
// THEME COLOR CHANGING
// https://code.visualstudio.com/api/references/theme-color
// SAMPLES
// https://marketplace.visualstudio.com/items?itemName=RolandGreim.sample-ext


// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

async function colorTitleBar() {

	// THIS IS WORKING FOR THEME CHANGE
	//let config = vscode.workspace.getConfiguration();
	//await config.update('workbench.colorTheme', 'Allure Light (rainglow)', true);
	// ---------------------------------

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
	vscode.window.showInputBox(options).then((enteredColor: any) => {
		//vscode.window.showInformationMessage('You entered ' + enteredColor);

		// if user pressed ESC to cancel
		if (enteredColor === undefined) {
			return;
		}

		// get reference to workspace configuration and set titleBar color
		let config:vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration();
		let value:Object = {
			"titleBar.activeBackground": enteredColor,
			"activityBar.background": enteredColor
		};
		// undefined so it only updates the workspace configurations and not globally
		// updates the .vscode/settings.json file of project folder
		//await config.update("workbench.colorCustomizations", value, undefined);
		config.update("workbench.colorCustomizations", value, undefined);
	});



	/*
	// get reference to workspace configuration and set titleBar color
	let config:vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration();
	let value:Object = {
		"titleBar.activeBackground":"#00AA00",
		"activityBar.background": "#00AA00"
	};
	// undefined so it only updates the workspace configurations and not globally
	// updates the .vscode/settings.json file of project folder
	await config.update("workbench.colorCustomizations", value, undefined);
	*/
	


	
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

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
}

// this method is called when your extension is deactivated
export function deactivate() {}
