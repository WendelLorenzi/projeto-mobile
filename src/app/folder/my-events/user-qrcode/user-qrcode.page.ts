import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-user-qrcode',
  templateUrl: './user-qrcode.page.html',
  styleUrls: ['./user-qrcode.page.scss'],
})
export class UserQrcodePage implements OnInit {

  public qrcode: string = '';

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {qrcode: any};
    if (state) {
      this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.qrcode).then(
        encodedData => {
          console.log(encodedData);
          this.qrcode = encodedData;
        },
      )
      // this.qrcode = state.qrcode;
    }
  }

  goBack() {
    this.router.navigate(['/folder/Eventos/my-events']);
  }

}
