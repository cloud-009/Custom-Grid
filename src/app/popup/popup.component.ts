import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  linkData: any;
  allLinks:any;
  id:any;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getData();
    
  }
  getData() {
    this.http.get("http://localhost:3000/posts").subscribe(res => {
     this.linkData = res;
    //  this.allLinks = this.linkData;
    //  console.log(this.allLinks[0]);
     let allData:any
     for (let i=0; i<this.linkData.length; i++) {
         for (let j=0; j<this.linkData[i].Details.length; j++) {
           if (this.linkData[i].Details[j].links) {
             for (let k=0; k<this.linkData[i].Details[j].links.length; k++) {
               allData = this.linkData[i].Details[j].links[k];
               this.allLinks = allData;
              //  console.log(this.allLinks)
                 return JSON.stringify(this.allLinks);
                //  console.log(JSON.stringify(this.allLinks));
             }
           }
         }
       }
    })
  }

  getID(id:any) {
    this.http.get("http://localhost:3000/posts").subscribe(res=>{
      this.id = res;
      console.log(id);
    })
  }
}
