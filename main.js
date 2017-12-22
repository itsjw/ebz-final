const {app, BrowserWindow} = require('electron')
const mainWindow = require('./mainWindow')

// development helper package
require('electron-reload')(__dirname)

// initialize electron instance, after complete, invoke createWindow
app.on('ready', mainWindow.createWindow)

// quit the app if all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

//
app.on('activate', () => {
    if (mainWindow == null) mainWindow.createWindow()
})

