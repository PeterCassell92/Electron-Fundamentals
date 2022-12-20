const electron = require('electron');
const { captureScreenshot } = require('./screenshot');

const { app , globalShortcut, BrowserWindow } = electron 

let mainWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        width: 0,
        height: 0,
        resizable: false,
        frame: false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // mainWindow.openDevTools();

    mainWindow.loadURL(`file://${__dirname}/capture.html`);

    mainWindow.on('close', _ => {
        mainWindow = null;
    });
    globalShortcut.register('Ctrl+Alt+D', _ => {
        //mainWindow.webContents.send('capture', app.getPath('pictures')); // this way appears not to work as renderer process
        // no longer has access to the screen object in this scope.
        captureScreenshot(app.getPath('pictures'));
        
    });
})

