import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

public address:string = "Main G.T Road Bank Stop Opp Bata Factory Manawan Lahore, Pakistan";
public email:string = "";
public phoneList:any;

  constructor(public router: Router) { }

  ngOnInit() {
    this.phoneList = [];
    this.phoneList.push({num: '042-111-191-192'});
    this.phoneList.push({num: '042-111-191-192'});

    if (this.router.url === "/upcoming") {
      
      this.address = "Main Ferozpur Road, Mustafabad, Laliani, Lahore";
      this.phoneList = [];
      this.phoneList.push({num: '0309-2001000'});
      this.phoneList.push({num: '0309-3008000'});
    }
  }

}
