import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadQrcodePage } from './read-qrcode.page';

describe('ReadQrcodePage', () => {
  let component: ReadQrcodePage;
  let fixture: ComponentFixture<ReadQrcodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
