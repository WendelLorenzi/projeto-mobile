import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserQrcodePage } from './user-qrcode.page';

describe('UserQrcodePage', () => {
  let component: UserQrcodePage;
  let fixture: ComponentFixture<UserQrcodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
