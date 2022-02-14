import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      window.open('https://www.nab.com.au/', '_self')
    }, 10000);
  }

}
