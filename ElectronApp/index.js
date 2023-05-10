const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Crea la ventana del navegador.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carga la página de tu aplicación ASP.NET y React.
  mainWindow.loadURL('https://localhost:44443')
}

// Cuando Electron haya terminado de inicializarse, crea la ventana de tu aplicación.
app.whenReady().then(createWindow)
