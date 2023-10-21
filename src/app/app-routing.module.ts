import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { App_Dashboad } from './Dashboard/dashboad.component';
import { Page_Auth } from './Page/Auth/Auth.Page';

const routes: Routes = [
  { path: 'auth', component: Page_Auth },
  { path: 'dashboard', component: App_Dashboad  },
  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }