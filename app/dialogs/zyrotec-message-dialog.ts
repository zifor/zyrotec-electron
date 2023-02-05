import { Mica, MicaBrowserWindow, Theme } from 'mica-electron-ts';
import * as path from 'path';

export class ZyrotecMessageDialog{

    constructor(private _url: string, private _parent: MicaBrowserWindow){}

    public createMessageDialog() {
        const zyrotecMessageDialog: MicaBrowserWindow = new MicaBrowserWindow({
            height: 600,
            width: 800,
            minHeight: 300,
            minWidth: 400,
            frame: true,
            show: false,
            parent: this._parent,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        });
    
        //LOAD WINDOW URL
        zyrotecMessageDialog.loadURL(this._url);
    
        //SET THEME
        zyrotecMessageDialog.setMicaEffect(Mica.Normal);
        zyrotecMessageDialog.setTheme(Theme.Dark);
    
        //SHOW WINDOW
        zyrotecMessageDialog.webContents.once('dom-ready', () => {
            zyrotecMessageDialog.show();
        });
    
        return zyrotecMessageDialog;
    }
}