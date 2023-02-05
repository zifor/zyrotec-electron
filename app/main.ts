import{ app, ipcMain } from 'electron';
import { Mica, MicaBrowserWindow, Theme } from 'mica-electron-ts';
import * as path from 'path';
import { ZyrotecMainWindow } from './windows/zyrotec-main-window';

require('electron-reloader')(module);

//Initialize Windows and Dialogs
let mainWindow: ZyrotecMainWindow = new ZyrotecMainWindow('Zyrotec Electron', 'http://localhost:4200/main-window');

app.whenReady().then(() => {
    mainWindow.createMainWindow();

    app.on('activate', () => {
        if(MicaBrowserWindow.getAllWindows().length === 0){
            mainWindow.createMainWindow();
        }
    })
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})