import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  getClass(){
    if(this.router.url === "/alraziq"){
      return "alraziq";
    }
    else if(this.router.url === "/project"){
      return "project";
    }
    else if(this.router.url === "/upcoming"){
      return "upcoming";
    }
    else{
      return "";
    }
  }

  checkIfToShow(){
    return ["/alraziq", "/project", "/upcoming"].includes(this.router.url);
  }
 
}
