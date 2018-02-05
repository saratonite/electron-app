const path = require('path')
const url = require('url')
const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    // Create browser window
    win = new BrowserWindow({
        width: 600,
        height:500
    });

    // Load initial page 
    win.loadURL(`http://localhost:1234`)//(`file://${__dirname}/src/index.html`)

    win.on('closed', ()=> {

        win = null;

    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
  
app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})