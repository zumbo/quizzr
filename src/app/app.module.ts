import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
