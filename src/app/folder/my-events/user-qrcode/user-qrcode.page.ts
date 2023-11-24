import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-qrcode',
  templateUrl: './user-qrcode.page.html',
  styleUrls: ['./user-qrcode.page.scss'],
})
export class UserQrcodePage implements OnInit {

  public qrcode: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {qrcode: any};
    if (state) {
      this.qrcode = state.qrcode;
    }
  }

  goBack() {
    this.router.navigate(['/folder/Eventos/my-events']);
  }

}
