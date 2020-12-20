import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drSign:string='assets/sign.png';
  drImg:string='assets/d.png';
  ser1:string='assets/ser1.jpg';
  ser2:string='assets/ser2.jpg';
  ser3:string='assets/ser3.jpg';
  ser4:string='assets/ser4.jpg';
  ser5:string='assets/ser5.jpg';
  ser6:string='assets/ser6.jpg';
  ser7:string='assets/ser7.jpg';
  ser8:string='assets/ser8.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
