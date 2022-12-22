import { Component, OnInit } from '@angular/core';
import { ColDef } from "ag-grid-community";
import { HttpClient } from '@angular/common/http';
import { CustomComponent } from './custom/custom.component';
import { CountComponent } from './count/count.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomGrid';


  constructor(private http:HttpClient) {}
  
  ngOnInit(): void {
    this.rowData = this.http.get('http://localhost:3000/posts');
  }

  columnDefs: ColDef[] = [
    { field: 'City', filter:true, width:100,cellStyle: {'border-right': '1px solid #cbcbb3','border-left':'0' } },
    { field: 'State', filter:true, width:150, cellStyle: {'border-right': '1px solid #cbcbb3','border-left':'0' } },
    { field: 'Date', width:130, cellStyle: {'border-right': '1px solid #cbcbb3','border-left':'0' }},
    {field: 'Count', cellRenderer: CountComponent, width: 100,cellStyle: {'border-right': '1px solid #cbcbb3','border-left':'0' }},
    { field: 'Icons',cellRenderer: CustomComponent, width:600,cellStyle: {'border-right': '1px solid #cbcbb3','border-left':'0' } }
];
  public rowData!: any;
}
