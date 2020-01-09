import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';


const routes: Routes = [
  { path: '', component: MultipleChoiceComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
