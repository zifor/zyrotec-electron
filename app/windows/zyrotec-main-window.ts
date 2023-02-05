import { ZyrotecMessageDialog } from '../dialogs/zyrotec-message-dialog';
import { ipcMain } from "electron";
import { Mica, MicaBrowserWindow, Theme } from "mica-electron-ts";

export class ZyrotecMainWindow{
    public zyrotecMainWindow!: MicaBrowserWindow;
    public messageDialog: ZyrotecMessageDialog = new ZyrotecMessageDialog('http://localhost:4200/message-dialog', this.zyrotecMainWindow);

    constructor(private _title: string, private _url: string){}

    public createMainWindow(): MicaBrowserWindow{
        this.zyrotecMainWindow = new MicaBrowserWindow({
            height: 600,
            width: 800,
            minHeight: 300,
            minWidth: 400,
            frame: true,
            show: false,
            title: this._title,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        })
    
        //LOAD WINDOW URL
        this.zyrotecMainWindow.loadURL(`${ this._url }`);
    
        //SET THEME
        this.zyrotecMainWindow.setMicaEffect(Mica.Normal);
        this.zyrotecMainWindow.setTheme(Theme.Dark);
    
        //SHOW WINDOW
        this.zyrotecMainWindow.webContents.once('dom-ready', () => {
            this.zyrotecMainWindow.show();
        });

        this.zyrotecMainWindow.webContents.send('window-title', this._title)

        ipcMain.on('show-message-dialog', () => {
            this.messageDialog.createMessageDialog();
        })

        return this.zyrotecMainWindow;
    }
}