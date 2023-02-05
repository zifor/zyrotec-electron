import { Component } from '@angular/core';
import { ElectronService } from 'src/app/@core/services/electron.service';

@Component({
  selector: 'main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent {
  constructor(private _electronService: ElectronService){}

  show(): void {
    this._electronService.ipcRenderer.send('show-message-dialog')
  }

  ngOnInit(): void{
    this._electronService.ipcRenderer.send('show-message-dialog')
  }
}
