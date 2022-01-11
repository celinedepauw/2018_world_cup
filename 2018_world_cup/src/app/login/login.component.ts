import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// UTILISATION REACTIVE FORM
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

email = new FormControl('');
password = new FormControl('');

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    /*if (this.email !== 'nacer@devid.com') {
      alert('email incorrect')
    } else if (this.password !== 'FutbalL2018') {
      alert('mot de passe incorrect')
    } else {
      this.router.navigateByUrl('/home');
    }*/
  }
}

/* VALIDATION FORMULAIRE BASIQUE
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
