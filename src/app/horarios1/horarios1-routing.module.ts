import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Horarios1Page } from './horarios1.page';

const routes: Routes = [
  {
    path: '',
    component: Horarios1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Horarios1PageRoutingModule {}
