import { ZyrotecMessageDialog } from '../dialogs/zyrotec-message-dialog';
import { ipcMain } from "electron";
import { Mica, MicaBrowserWindow, Theme } from "mica-electron-ts";

export class ZyrotecWindow{
    public zyrotecWindow!: MicaBrowserWindow;
    public messageDialog: ZyrotecMessageDialog = new ZyrotecMessageDialog('http://localhost:4200/message-dialog', this.zyrotecWindow);

    constructor(private _title: string, private _url: string){}

    public createMainWindow(): MicaBrowserWindow{
        this.zyrotecWindow = new MicaBrowserWindow({
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
        this.zyrotecWindow.loadURL(`${ this._url }`);
    
        //SET THEME
        this.zyrotecWindow.setMicaEffect(Mica.Normal);
        this.zyrotecWindow.setTheme(Theme.Dark);
    
        //SHOW WINDOW
        this.zyrotecWindow.webContents.once('dom-ready', () => {
            this.zyrotecWindow.show();
        });

        ipcMain.on('show-message-dialog', () => {
            this.messageDialog.createMessageDialog();
        })

        return this.zyrotecWindow;
    }
}