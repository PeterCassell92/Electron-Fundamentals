
// import electron from 'electron';
// import fs from 'fs';
// import path from 'path';
// import dateFormat from 'dateformat';
const electron = require('electron');
const fs = require('fs');
const path = require('path');
const { format: dateFormat } = require('date-and-time');
const { screen, desktopCapturer } = electron;

function getMainSource(){
    const options = { types: ['screen'], thumnailSize: screen.getPrimaryDisplay().workAreaSize }
   
    return desktopCapturer.getSources(options).then( (sources) => {     
        const isMainSource = source => source.name === 'Entire screen' || source.name === 'Screen 1';
        return sources?.filter(isMainSource)[0];
    }).catch(err => console.log('Cannot capture screen:', err));
}

function captureScreenshot(targetPath){
    getMainSource().then( source => {
        const png = source.thumbnail.toPNG();
        const date = new Date();
        const dateStr =  dateFormat(date, 'YYYY-MM-DD-HHmmss');
        const filePath = path.join(targetPath, dateStr + '.png');
        writeScreenshot(png, filePath);
    });
}
    
function writeScreenshot(png, filePath){
    try{
        fs.writeFileSync(filePath, png);
        console.log('Screenshot saved to ' + filePath);
    } catch(e){
        console.log('Unable to write screenshot to ' + filePath);
    }
}

module.exports = { captureScreenshot };