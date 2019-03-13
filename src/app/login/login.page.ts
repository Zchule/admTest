import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = null;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      usuario: ['', [Validators .required]],
      contrasena: ['', [Validators.required]]
    });
  }

  Ingresar() {
    this.user = this.form.value;
    console.log(this.user);
    this.router.navigate([`home`]);
  }

}
