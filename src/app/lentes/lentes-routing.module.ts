import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LentesPage } from './lentes.page';

const routes: Routes = [
  {
    path: '',
    component: LentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LentesPageRoutingModule {}
