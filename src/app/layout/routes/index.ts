import { LoginComponent } from 'src/app/account/login/login.component';
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
      },
      {
        path: 'registro/:id',
        component: ViewComponent,
      },
      {
        path: ':name/registrar',
        component: CreateComponent,
      },
    ],
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

export default layoutRoutes;
