import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'color', component: ColorComponent},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
