<<<<<<< HEAD
import { Component, ViewEncapsulation} from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'az-chat',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent {
    public chatList:Array<any>;
    public newChatText:string = '';

    constructor( private _chatService:ChatService) {
        this.chatList = this._chatService.getChatList();
    }

    public addChatItem($event) {     
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.chatList.push({
                image:'assets/img/profile/tereza.jpg',
                author:'tereza stiles',
                text: this.newChatText,
                date: new Date(),
                side:'left'
            });
            this.newChatText = '';

            let chatContainer = jQuery(".media-list");     
            var scrollToBottom = chatContainer.prop('scrollHeight') + 'px';
            setTimeout(() => {
                chatContainer.slimScroll({
                    scrollTo : scrollToBottom
                });
            });                
        }
    }


}
=======
import { Component, ViewEncapsulation} from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'az-chat',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent {
    public chatList:Array<any>;
    public newChatText:string = '';

    constructor( private _chatService:ChatService) {
        this.chatList = this._chatService.getChatList();
    }

    public addChatItem($event) {     
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.chatList.push({
                image:'assets/img/profile/tereza.jpg',
                author:'tereza stiles',
                text: this.newChatText,
                date: new Date(),
                side:'left'
            });
            this.newChatText = '';

            let chatContainer = jQuery(".media-list");     
            var scrollToBottom = chatContainer.prop('scrollHeight') + 'px';
            setTimeout(() => {
                chatContainer.slimScroll({
                    scrollTo : scrollToBottom
                });
            });                
        }
    }


}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
