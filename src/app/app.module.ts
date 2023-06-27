import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './redux/reducers/todos.reducers';
import { SharedModule } from './shared/shared.module';
import { filterReducer } from './redux/reducers/filter.reducers';
@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodosComponent,
    SharedModule,
    StoreModule.forRoot({
      todos: todosReducer,
      filter: filterReducer,
    }),
  ],
})
export class AppModule {}
