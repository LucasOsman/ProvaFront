import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLivroComponent } from './components/add-livro/add-livro.component';
import { ListLivroComponent } from './components/list-livro/list-livro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddLivroComponent,
    ListLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
