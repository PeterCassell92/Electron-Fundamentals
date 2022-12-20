const electron = require('electron');
const app = electron.app;
const { BrowserWindow, Menu } = electron;

app.on('ready', _ => {
    new BrowserWindow({webPreferences: {nodeIntegration: true}})
    const name = electron.app.getName();
    const template = [
        {
            label: name,
            submenu: [{
                label: `About ${name}`,
                click: _ => {
                    console.log('clicked about')
                },
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                label: 'quit',
                click: _ => { app.quit() },
                accelerator: 'Ctrl+Q'
            }
        ],
            
            
        },
        
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})