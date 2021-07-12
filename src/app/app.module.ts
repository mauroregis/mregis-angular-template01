import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FuncaoListarComponent } from './funcao/funcao-listar/funcao-listar.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, FuncaoListarComponent, HeaderComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
