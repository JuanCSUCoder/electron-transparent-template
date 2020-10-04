import electron, { app, BrowserWindow } from 'electron';

// app.disableHardwareAcceleration();

function createWindow () {
  setTimeout(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600,
			minHeight: 140,
			minWidth:330,
			transparent: true,
			frame: false,
			webPreferences: {
				nodeIntegration: true,
        enableRemoteModule: true,
        worldSafeExecuteJavaScript: true,
			},
		});

		win.loadFile('../index.html');
	},500)
}

app.whenReady().then(createWindow);