import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { FormGroup } from '@angular/forms';
import { PoeListComponent } from './poe/poe-list/poe-list.component';
import { PoeFormComponent } from './poe-form/poe-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'poe-list',
    component: PoeListComponent,
    pathMatch: 'full'
  },
  {
    path: 'poe-add',
    component: PoeFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

