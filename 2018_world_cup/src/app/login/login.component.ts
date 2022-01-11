import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// UTILISATION REACTIVE FORM
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

/* Sans FormGroup
email = new FormControl('');
password = new FormControl('');
*/

// Avec FormGroup
loginForm!: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {                                                                                        
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('nacer@devid.com')]),
      password: new FormControl('', [Validators.required, Validators.pattern('FutbalL2018')])
    })
  }

  onSubmit() {
    if(this.loginForm.value.email == 'nacer@devid.com' && this.loginForm.value.password == 'FutbalL2018') {
      this.router.navigateByUrl('/home');
    }
  }
}

/* VALIDATION FORMULAIRE BASIQUE SANS REACTIVE FORM
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

email: string = '';
password: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.email !== 'nacer@devid.com') {
      alert('email incorrect')
    } else if (this.password !== 'FutbalL2018') {
      alert('mot de passe incorrect')
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}*/
