import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit, ICellRendererAngularComp {
  count:any;
  total:any;
  constructor() { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.count = params.data.Details;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.links();
  }

  links() {
    let sum=0;
    for (let i=0; i<this.count.length; i++) {
      sum += this.count[i].count;
      this.total=sum;
    }
  }

}
