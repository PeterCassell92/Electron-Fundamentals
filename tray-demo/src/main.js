const electron = require('electron');
const { app, Tray, Menu } = require('electron');
const path = require('path');

//or app.on('ready', func)
app.whenReady().then( () => {
    const tray = new Tray(path.join('src', 'trayIcon.png'));
    tray.setToolTip('This is my application.');


    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Do This',
            click: _ => console.log('ooh')
        },
        {
            label: 'Do That',
            click: _ => console.log('aah')
        }
    ])
    tray.setContextMenu(contextMenu);
});