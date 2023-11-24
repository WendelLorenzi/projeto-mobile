import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email!: string;
  public password!: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  IrParaRegistrar() {
    this.router.navigate(['registro']);
  }

  Login() {
    console.log(this.email);
    console.log(this.password);
    if (this.email == 'teste@gmail.com' && this.password == 'projeto-final')
      this.router.navigate(['folder/Eventos']);
  }
}
