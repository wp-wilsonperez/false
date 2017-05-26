<<<<<<< HEAD
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
=======
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
});