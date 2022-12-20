const electron = require('electron');

//In newer versions of election only the main process has access to the screen / desktopCapturer APIs.
//Therefore, I have moved the code to take the screenshot to the main process.

//An alternate solution would be to use 'preload' in webPreferences to make certain libraries available to the renderer process securely.
//Jake Trent has outlined this solution here: https://github.com/jaketrent/demo-electron-directory

// const path = require('path');
// const fs = require('fs');

// const { desktopCapturer: desktopCapturer, ipcRenderer: ipc , screen: screen } = electron;
//const screen = electron.screen;

// function onCapture(evt, targetPath){
//     getMainSource(desktopCapturer, screen, source => {
//         const png = source.thumnail.toPng();
//         const filePath = path.join(targetPath, new Date() + '.png');
//         writeScreenshot(png, filePath);
//     });
// }

// function writeScreenshot(png, filePath){
//     fs.writeFile(filePath, png, err => {
//         if(err){
//             console.log('Unable to write screenshot to ' + filePath);
//         }
//     })
// }

// function getMainSource(desktopCapturer, screen, done){
//     const options = { types: ['screen'], thumnailSize: screen.getPrimaryDisplay().workAreaSize }
//     desktopCapturer.getSources(options, (err, sources) => {
//         if(err){
//             return console.log('Cannot capture screen:', err);
//         }
//         const isMainSource = source => source.name === 'Entire screen' || source.name === 'Screen 1';
//         done(sources.filter(isMainSource)[0]);

//     })
// }

// ipc.on('capture', onCapture);