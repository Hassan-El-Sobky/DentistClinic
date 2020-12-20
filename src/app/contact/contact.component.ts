import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageFlag:boolean=false //Flag

  /* Create an instance from FromGroup to validate our inputs */
 formData=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  name:new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}')]), //Regex Validtors 1st char must be upperCasr
  message:new FormControl('',[Validators.required])

 })
 // Inject Router to nagivate(Redirect) by URL
 constructor(private router:Router) { }

 ngOnInit() {
 }
 
 /* If the user Sumbit Thanks message will appear*/
 onSubmit()
 {
   this.messageFlag=true 
 }

  /* If the user  Cliked thanks message closed and redirect to home page */
 close()
 {
   this.messageFlag=false
   this.router.navigateByUrl('/home')  //By this line it will be redirect
 }
}
