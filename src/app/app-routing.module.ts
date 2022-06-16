import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'admin',
    },
  },
  {
    path: 'dishes',
    loadChildren: () =>
      import('./dishes/dishes.module').then((m) => m.DishesPageModule),
  },
  {
    path: 'dishes/:fdnumb',
    loadChildren: () =>
      import('./dishes/dishes.module').then((m) => m.DishesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'data-sender',
    loadChildren: () =>
      import('./data-sender/data-sender.module').then(
        (m) => m.DataSenderPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
