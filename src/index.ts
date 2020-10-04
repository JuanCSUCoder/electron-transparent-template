import electron, { app, BrowserWindow } from 'electron';

// app.disableHardwareAcceleration();

function createWindow () {
  setTimeout(() => {
    // Crea la ventana del navegador.
		const win = new BrowserWindow({
			width: 800,
			height: 600,
			transparent: true,
			frame: false,
			webPreferences: {
				nodeIntegration: true,
        enableRemoteModule: true,
        worldSafeExecuteJavaScript: true,
			},
		});

		// y carga el index.html de la aplicación.
		win.loadFile('../index.html');
	},500)
}

app.whenReady().then(createWindow);