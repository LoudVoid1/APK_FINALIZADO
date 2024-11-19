import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Horarios1PageRoutingModule } from './horarios1-routing.module';

import { Horarios1Page } from './horarios1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Horarios1PageRoutingModule
  ],
  declarations: [Horarios1Page]
})
export class Horarios1PageModule {}
