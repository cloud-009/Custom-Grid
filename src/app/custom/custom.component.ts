import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {  ICellRendererParams } from 'ag-grid-community';
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, ICellRendererAngularComp{
  icons:any;
  
  constructor(public dialog:MatDialog) { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.icons = params.data.Details;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(PopupComponent,{
      width: '300px',
      height: '150px',
      maxHeight: 'auto',
    });  
    }

    getId(id:any) {
      console.log(JSON.stringify(id));
    }

 

}
