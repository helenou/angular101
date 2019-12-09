import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/base/app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import {FormsModule} from '@angular/forms';
import { ToDoComponentComponent } from './components/to-do-component/to-do-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ToDoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, PresentationComponent, ToDoComponent ]
})
export class AppModule { }
