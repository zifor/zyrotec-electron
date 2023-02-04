import{ app, BrowserWindow } from 'electron';
import * as path from 'path';

require('electron-reloader')(module);

function createMainWindow(): void {
    const mainWindow: BrowserWindow = new BrowserWindow({
        height: 600,
        width: 800,
        minHeight: 300,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    mainWindow.loadURL('http://localhost:4200');
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    })
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})