import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './todos/components/overview/overview.component';
import {DoneTodosComponent} from './todos/components/done-todos/done-todos.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'done', component: DoneTodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
