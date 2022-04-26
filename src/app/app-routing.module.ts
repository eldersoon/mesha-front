import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import layoutRoutes from './layout/routes';

const routes: Routes = [...layoutRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
