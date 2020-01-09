import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';


const routes: Routes = [
  { path: '', component: MultipleChoiceComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
