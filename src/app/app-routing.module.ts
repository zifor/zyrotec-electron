import { MainWindowComponent } from './windows/main-window/main-window.component';
import { ZyrotecMessageDialogComponent } from './dialogs/zyrotec-message-dialog/zyrotec-message-dialog.component';
import { ZyrotecMessageDialogModule } from './dialogs/zyrotec-message-dialog/zyrotec-message-dialog.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-window',
    component: MainWindowComponent
  },
  {
    path:'message-dialog',
    component: ZyrotecMessageDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
