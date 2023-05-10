const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Crea la ventana del navegador.
  const mainWindow = new BrowserWindow({
    width: 1920, // Ancho de pantalla completa
    height: 1080, // Alto de pantalla completa
    autoHideMenuBar: true, // Oculta la barra de herramientas
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carga la página de tu aplicación ASP.NET y React.
  mainWindow.loadURL('https://localhost:44443')
  mainWindow.maximize()
  mainWindow.show()
}

// Cuando Electron haya terminado de inicializarse, crea la ventana de tu aplicación.
app.whenReady().then(createWindow)
