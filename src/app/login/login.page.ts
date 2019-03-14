import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthorizacionService } from '../services/authorization.service';
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
    private router: Router,
    private authorizationService: AuthorizacionService
  ) {
  }

  logout() {
    this.authorizationService.logout();
  }

  ngOnInit() {
    this.form = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      email: ['', [Validators .required]],
      password: ['', [Validators.required]]
    });
  }

  Ingresar() {
    this.user = this.form.value;
    console.log(this.user);
    this.authorizationService.login(this.user.email, this.user.password);
  }

}
