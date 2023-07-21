import { Component } from '@angular/core';
import { SingerService } from './services/singer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tar_Atwal_MyFavouriteSingers';
  singleContentItem:any;
  requestedContentId: any;
  constructor(private singerService:SingerService){

  }
  ngOnInit(): void {
    const idNumber = 3;
    this.singerService.getContentItemById(idNumber).subscribe((data)=>{
        this.singleContentItem = data;
        console.log('singleContentItem', this.singleContentItem);
    });
  }

  getRequestedContent() {
    console.log('this.requestedContentId',this.requestedContentId);
    this.singerService.getContentItemById(this.requestedContentId).subscribe(item => {
      console.log('item',item);
      this.singleContentItem = item;
      console.log('singleContentItem click',this.singleContentItem);
    });
  }
}
