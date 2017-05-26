<<<<<<< HEAD
import { Router } from '@angular/router';
import { UserSessionService } from './../../../providers/session.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';

@Component({
  selector: 'az-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserSessionService]
})

export class NavbarComponent {
    userInfo:any;
    public isMenuCollapsed:boolean = false;

    constructor(private _state:AppState,public user:UserSessionService,public router:Router) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        this.userInfo = user.getUser();
        console.log(this.userInfo);
        
    }
    closeSession(){
       localStorage.clear();
       this.router.navigate(['/login']);
       
        
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);        
    }

}
=======
import { Router } from '@angular/router';
import { UserSessionService } from './../../../providers/session.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';

@Component({
  selector: 'az-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserSessionService]
})

export class NavbarComponent {
    userInfo:any;
    public isMenuCollapsed:boolean = false;

    constructor(private _state:AppState,public user:UserSessionService,public router:Router) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        this.userInfo = user.getUser();
        console.log(this.userInfo);
        
    }
    closeSession(){
       localStorage.clear();
       this.router.navigate(['/login']);
       
        
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);        
    }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
