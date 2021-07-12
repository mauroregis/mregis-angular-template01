import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './template/home/home.component';
import { FuncaoListarComponent } from './funcao/funcao-listar/funcao-listar.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    FuncaoListarComponent,
    HeaderComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
