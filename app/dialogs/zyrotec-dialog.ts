import { Mica, MicaBrowserWindow, Theme } from 'mica-electron-ts';
import * as path from 'path';

export class MessageDialog{

    constructor(private _title: string, private _url: string, private _parent: MicaBrowserWindow){}

    public createAboutDialog() {
        const aboutDialog: MicaBrowserWindow = new MicaBrowserWindow({
            height: 600,
            width: 800,
            minHeight: 300,
            minWidth: 400,
            frame: true,
            show: false,
            parent: this._parent,
            title: this._title,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        });
    
        //LOAD WINDOW URL
        aboutDialog.loadURL(this._url);
    
        //SET THEME
        aboutDialog.setMicaEffect(Mica.Normal);
        aboutDialog.setTheme(Theme.Dark);
    
        //SHOW WINDOW
        aboutDialog.webContents.once('dom-ready', () => {
            aboutDialog.show();
        });
    
        return aboutDialog;
    }
}