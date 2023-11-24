import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-read-qrcode',
  templateUrl: './read-qrcode.page.html',
  styleUrls: ['./read-qrcode.page.scss'],
})
export class ReadQrcodePage implements OnInit {

  public userQrCode: any;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) { }

  scanQRCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    });
  }

  goBack() {
    this.router.navigate(['/folder/Eventos']);
  }


  ngOnInit() {
    this.userQrCode = {
      user: {
        id: '',
        name: ''
      },
      qrcode: '',
    }
  }

}
