import { Component, OnInit } from '@angular/core';

import { DressService } from '../../../dress.service';

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['../../../../../src/styles.scss']
})
export class AppComponent implements OnInit {
  title = 'firstAppAngular';
  dress: any[] = [];

  constructor(private dressService: DressService) {
    
  }

  ngOnInit(): void {
    console.log("on init")
    this.dressService.getDress().subscribe((data: any) =>{
      this.dress = data;
    })
  }
}