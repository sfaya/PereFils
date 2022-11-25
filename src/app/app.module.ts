import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListAccountsComponentComponent } from './list-accounts-component/list-accounts-component.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    UsersListComponent,
    UpdateUserComponent,
    HomeComponent,
    NotFoundComponent,
    ListAccountsComponentComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
