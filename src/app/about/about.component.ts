import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dr1Src:string='assets/pic1.jpg';
  dr2Src:string='assets/pic2.jpg';
  dr3Src:string='assets/pic3.jpg';
  dr4Src:string='assets/pic4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
