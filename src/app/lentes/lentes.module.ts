import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LentesPageRoutingModule } from './lentes-routing.module';

import { LentesPage } from './lentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LentesPageRoutingModule
  ],
  declarations: [LentesPage]
})
export class LentesPageModule {}
