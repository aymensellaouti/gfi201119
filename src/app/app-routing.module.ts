import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {TodoComponent} from './todo/todo.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {FrontComponent} from './front/front.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {LoginGuard} from './login.guard';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddPersonneComponent, canActivate: [LoginGuard]},
      {path: 'detail/:id', component: DetailPersonneComponent},
    ]
  },
  {path: '', component: FrontComponent, children: [
      {path: 'color/:couleur', component: ColorComponent},
      {path: 'todo', component: TodoComponent},
      {path: 'login', component: LoginComponent},
    ]},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
