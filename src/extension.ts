// color theme : overflow (rainglow)


// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


async function colorTitleBar() {

	// THIS IS WORKING FOR THEME CHANGE
	//let config = vscode.workspace.getConfiguration();
	//await config.update('workbench.colorTheme', 'Allure Light (rainglow)', true);
	// ---------------------------------


	//let config = vscode.workspace.getConfiguration("workbench").get("colorCustomizations");
	//let config = vscode.workspace.getConfiguration("workbench.colorCustomizations");
	//	.get("colorCustomizations.titleBar.activeBackground");
	//await config.update('titleBar.activeBackground', '#FF0000', undefined);

	// get reference to workspace configuration and set titleBar color
	let config = vscode.workspace.getConfiguration();
	let value = {
		"titleBar.activeBackground":"#00AA00",
		"activityBar.background": "#00AA00"
	};
	// undefined so it only updates the workspace configurations and not globally
	// updates the .vscode/settings.json file of project folder
	await config.update("workbench.colorCustomizations", value, undefined);

	


	
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

		// check if VS Code has project folder open - if not this extension does nothing :(
		// window.showErrorMessage
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
