import { Injectable } from '@angular/core';
import { IpcRenderer, WebFrame, Shell } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  public ipcRenderer!: IpcRenderer;
  public webFrame!: WebFrame;
  public shell!: Shell;
  public childProcess!: typeof childProcess;
  public fs!: typeof fs;

  constructor() {
    if(this.getIsElectron()){
      this.fs = window.require('fs');
      this.childProcess = window.require('child_process');
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.shell = window.require('electron').shell;
      this.webFrame = window.require('electron').webFrame;
    }
  }

  public getIsElectron(): boolean{
    return !!(window && window.process && window.process.type);
  }
}
