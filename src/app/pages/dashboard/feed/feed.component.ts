<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'az-feed',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [ FeedService ]
})
export class FeedComponent  {  
  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }

}
=======
import { Component, ViewEncapsulation } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'az-feed',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [ FeedService ]
})
export class FeedComponent  {  
  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
