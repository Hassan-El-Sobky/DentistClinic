import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CovidService } from '../services/covid.service';
@Component({
  selector: 'covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  constructor(private spinner: NgxSpinnerService, private _covid:CovidService) {
  }
  allpost:any=[];
  length:any=[];
  notEmptyPost:boolean = true;
  notscrolly:boolean= true;
  
   ngOnInit() {
     this.loadInitPost();
  }
  // load the Initial 6 posts
  loadInitPost() {
   this._covid.getData().subscribe(data => {
     this.length=data.Countries;
     for(let i=0 ;i<6;i++)
     {
       this.allpost.push( data.Countries[i]);
     }
     
   });
 }

 onScroll() {
 if (this.notscrolly && this.notEmptyPost) {
  setTimeout(() => {
    /** spinner ends after 1.5seconds */
    this.spinner.hide();
  }, 1500);
   this.notscrolly = false;
   this.loadNextPost();
  }
 }
 // load th next 6 posts
 loadNextPost() {
   // return last index from the array
   const lastindex = this.allpost.length  ;
     if(lastindex<=this.length.length){
   this._covid.getData().subscribe(data => {
    this.spinner.show();
 
   
     for(let i=lastindex ;i<6+lastindex;i++)
     {
       this.allpost.push(data.Countries[i]);
       
     }
     
   })}
   else
   {
     this.notEmptyPost=false;
   }
   ;
   this.notscrolly = true;

 }

  

}
