import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OverviewComponent} from './todos/components/overview.component';
import {TodoInputComponent} from './todos/components/todo-input/input.component';
import {TodoListComponent} from './todos/components/todo-list/todo-list.component';
import {FooterComponent} from './todos/components/todo-footer/footer.component';
import {TodoHeaderComponent} from './todos/components/todo-header/todo-header.component';
import {TodoRemoveComponent} from './todos/components/todo-remove/todo-remove.component';
import {TodoService} from './todos/model/todo.service';

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        TodoInputComponent,
        TodoListComponent,
        FooterComponent,
        TodoHeaderComponent,
        TodoRemoveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
