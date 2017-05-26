<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'az-error',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './error.component.html'
})
export class ErrorComponent {
    router: Router;
    
    constructor(router: Router) {
        this.router = router;
    }

    searchResult(): void {
        this.router.navigate(['pages/search']);
    }
=======
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'az-error',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './error.component.html'
})
export class ErrorComponent {
    router: Router;
    
    constructor(router: Router) {
        this.router = router;
    }

    searchResult(): void {
        this.router.navigate(['pages/search']);
    }
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
}