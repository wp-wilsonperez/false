<<<<<<< HEAD
import { Directive, ElementRef, Input } from '@angular/core';
import 'skycons/skycons';

@Directive ({
  selector: '[skycon]'
})

export class Skycon {
  $el: any;
  @Input() color: string;
  @Input() weather: string;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let icons = new Skycons({'color': this.color});
    icons.set(this.$el[0], this.weather);
    icons.play();
  }
}
=======
import { Directive, ElementRef, Input } from '@angular/core';
import 'skycons/skycons';

@Directive ({
  selector: '[skycon]'
})

export class Skycon {
  $el: any;
  @Input() color: string;
  @Input() weather: string;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let icons = new Skycons({'color': this.color});
    icons.set(this.$el[0], this.weather);
    icons.play();
  }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
