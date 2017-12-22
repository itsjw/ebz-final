const {BrowserWindow} = require('electron')

exports.window

exports.createWindow = () => {
    
    this.window = new BrowserWindow({
        width: 1000,
        height: 200,
        minWidth: 700,
        minHeight: 600,
        maxWidth: 1280,
        maxHeight: 600    
    })

    this.window.loadURL(`file://${__dirname}/renderer/main.html`)

    this.window.on('closed', () => {
        this.window = null
    })

}
