import { Component } from '@angular/core';
import { HeelService } from 'src/app/service/heelService/heel-service.service';

@Component({
  selector: 'app-page-heel',
  templateUrl: './page-heel.component.html',
  styleUrls: ['./page-heel.component.scss']
})
export class PageHeelComponent {
  public shoes: any = [];

    constructor(private heelService: HeelService){}

      ngOnInit(): void{
        this.heelService.getHeel().subscribe(data=>{
          this.shoes = data;
          console.log(this.shoes)
        })
      }
}
