import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'horarios1',
    loadChildren: () => import('../horarios1/horarios1.module').then(m => m.Horarios1PageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('../ubicacion/ubicacion.module').then(m => m.UbicacionPageModule)
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('../quienessomos/quienessomos.module').then(m => m.QuienessomosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('../login2/login2.module').then(m => m.Login2PageModule)
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
