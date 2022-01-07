import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 loginForm = new FormGroup({
   mail: new FormControl(''),
   password: new FormControl(''),
 })
 

 /*
 onSubmit(value: string){
   console.log(value)
 }
 */

//myform: FormGroup;

/*loginForm = this.formBuilder.group({
    email: '',
    password:''
})*/

 onSubmit(){
  console.log("soumission formulaire")
 }

  constructor(
   //private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
   /* this.myform = this.formBuilder.group({
      email: '',
      password:''
    })*/
    
  }

}
