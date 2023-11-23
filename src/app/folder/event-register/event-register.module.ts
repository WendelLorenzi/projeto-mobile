import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventRegisterPageRoutingModule } from './event-register-routing.module';

import { EventRegisterPage } from './event-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRegisterPageRoutingModule
  ],
  declarations: [EventRegisterPage]
})
export class EventRegisterPageModule {}
