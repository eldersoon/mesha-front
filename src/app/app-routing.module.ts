import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import layoutRoutes from './layout/routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  ...layoutRoutes,
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
