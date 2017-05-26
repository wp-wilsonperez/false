<<<<<<< HEAD
import {Directive, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import 'jquery-slimscroll';

@Directive({
  selector: '[slim-scroll]'
})
export class SlimScroll {

  @Input() public slimScrollOptions:Object;

  constructor(private _elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
=======
import {Directive, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import 'jquery-slimscroll';

@Directive({
  selector: '[slim-scroll]'
})
export class SlimScroll {

  @Input() public slimScrollOptions:Object;

  constructor(private _elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
