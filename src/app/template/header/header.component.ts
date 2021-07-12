import { Component, OnInit, Version } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  appVersion = Version.name;

  ngOnInit() {
  }

  returnToHomePage(){
  }

  isAcessoConecta(){
  }

  navigateTo(url){
  }

  isAcessoConquiste(){
  }
  
  logout(){
  }

  buscar(){
  }

  textoBusca(){
  }

  showModalVisao360(){
  }

  registroVisao360(){
  }

  closeModalVisao360(){
  }

 

}