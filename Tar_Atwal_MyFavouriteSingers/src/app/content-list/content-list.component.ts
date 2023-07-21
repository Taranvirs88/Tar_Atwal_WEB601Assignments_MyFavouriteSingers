import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SingerService } from '../services/singer.service';
import { contentList } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    contentList:any[];
     
    findTitle : string ='';
    filterResult: boolean = false;
    message :string =''
    
    findContent() {
      this.filterResult = this.contentList.some(content => content.title.toLowerCase() === this.findTitle.toLowerCase());
    
      if (this.filterResult) {
        this.message = 'title exists.';
      } else {
        this.message = ' title does not exist.';
      }
    }
    ngOnInit(){
      
    }
    
  }
  