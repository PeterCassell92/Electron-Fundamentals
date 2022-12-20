const electron = require('electron');

const countdown = require('./countdown');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipc = electron.ipcMain

const windows = [];

app.on('ready', () => {
    [1,2,3].forEach( _ => {
        let win =  new BrowserWindow({
            height: 400,
            width: 400,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
        console.log("READY TO RUMBLE");
    
        win.on('closed', _ => {
            win = null;
        });
    
        win.loadURL(`file://${__dirname}/countdown.html`);
    
        windows.push(win);
    }); 
});

ipc.on('countdown-start', _ => {
    countdown( count => {
        windows.forEach(win => {
            win.webContents.send('countdown', count)
        });
    });
})