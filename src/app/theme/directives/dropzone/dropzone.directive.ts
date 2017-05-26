<<<<<<< HEAD
import { Directive, ElementRef, Input} from '@angular/core';

@Directive ({
  selector: '[dropzone]'
})

export class DropzoneUpload {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let dropzone = new Dropzone(this.$el[0], {
      addRemoveLinks: true
    });
    Dropzone.autoDiscover = false;
   // Dropzone.options.myAwesomeDropzone = false;
  }

}
=======
import { Directive, ElementRef, Input} from '@angular/core';

@Directive ({
  selector: '[dropzone]'
})

export class DropzoneUpload {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let dropzone = new Dropzone(this.$el[0], {
      addRemoveLinks: true
    });
    Dropzone.autoDiscover = false;
   // Dropzone.options.myAwesomeDropzone = false;
  }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
