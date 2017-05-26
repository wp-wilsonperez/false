<<<<<<< HEAD
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mail, MailService }  from '../mail.service';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'az-mail-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnInit {
    public mail: Mail;

    @Output() replyMessage = new EventEmitter();

    constructor(private service: MailService,
                private route: ActivatedRoute,
                private router: Router){     
    } 

    ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.service.getMail(+params['id']))
        .subscribe((mail: Mail) => this.mail = mail);
    }

    goToReply(mail): void {
        this.replyMessage.emit(mail);
    }

    trash(id) {
        this.service.getMail(id).then((mail) => {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false; 
            mail.starred = false;           
        });        
        this.router.navigate(['pages/mail/mail-list/inbox']);
    }    

=======
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mail, MailService }  from '../mail.service';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'az-mail-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnInit {
    public mail: Mail;

    @Output() replyMessage = new EventEmitter();

    constructor(private service: MailService,
                private route: ActivatedRoute,
                private router: Router){     
    } 

    ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.service.getMail(+params['id']))
        .subscribe((mail: Mail) => this.mail = mail);
    }

    goToReply(mail): void {
        this.replyMessage.emit(mail);
    }

    trash(id) {
        this.service.getMail(id).then((mail) => {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false; 
            mail.starred = false;           
        });        
        this.router.navigate(['pages/mail/mail-list/inbox']);
    }    

>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
}