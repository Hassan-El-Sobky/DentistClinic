import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 logoSrc='assets/logo.png'
 clicked:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  toHome()
  {
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
    var x= document.getElementById('Ul')?.style.display=='none';
    this.clicked=!this.clicked
    
  }
  
  toAbout()
  {
    document.getElementById('about')?.scrollIntoView();
  }
  toContact()
  {
    document.getElementById('contact')?.scrollIntoView();
  }
  
  toCovid()
  {
    document.getElementById('covid')?.scrollIntoView();
  }
}
