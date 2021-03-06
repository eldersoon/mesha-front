import { LoginComponent } from 'src/app/account/login/login.component';
import { AuthGuard } from 'src/app/account/shared/auth.guard';
import { CreateComponent } from 'src/app/register/create/create.component';
import { ListComponent } from 'src/app/register/list/list.component';
import { ViewComponent } from 'src/app/register/view/view.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { HomeComponent } from '../home/home.component';

const layoutRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'registro/:id',
        component: ViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':name/registrar',
        component: CreateComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

export default layoutRoutes;
