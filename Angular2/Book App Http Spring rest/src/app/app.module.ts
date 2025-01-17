

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddBookComponent } from './book/addbook.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    WelcomeComponent,
    AddBookComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'book',component:BookComponent},
      {path:'newBook',component:AddBookComponent},

    ])    
 
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
