import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'comousar', loadChildren: './pages/comousar/comousar.module#ComousarPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'medio', loadChildren: './pages/medio/medio.module#MedioPageModule' },
  { path: 'mydoc', loadChildren: './pages/mydoc/mydoc.module#MydocPageModule' },
  { path: 'newdoc', loadChildren: './pages/newdoc/newdoc.module#NewdocPageModule' },
  { path: 'ubicacion', loadChildren: './pages/ubicacion/ubicacion.module#UbicacionPageModule' },
  { path: 'sub', loadChildren: './pages/sub/sub.module#SubPageModule' },
  { path: 'prueba', loadChildren: './pages/prueba/prueba.module#PruebaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}