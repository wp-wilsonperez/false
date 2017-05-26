<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-components',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './components.component.html'
})
export class ComponentsComponent {
    ngOnInit(): void {
        jQuery('[data-toggle="tooltip"]').tooltip();
        jQuery('[data-toggle="popover"]').popover();
    }
}
=======
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-components',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './components.component.html'
})
export class ComponentsComponent {
    ngOnInit(): void {
        jQuery('[data-toggle="tooltip"]').tooltip();
        jQuery('[data-toggle="popover"]').popover();
    }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
