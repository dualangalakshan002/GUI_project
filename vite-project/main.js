import { app, BrowserWindow } from 'electron'
import path from 'node:path'

const isDev = !app.isPackaged // Check if we're in development mode

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:5173') // Vite default dev server URL
  } else {
    win.loadFile(path.join(__dirname, 'dist', 'index.html')) // Load built files
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
