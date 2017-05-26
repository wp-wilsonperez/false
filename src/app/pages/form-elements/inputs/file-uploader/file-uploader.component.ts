<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-file-uploader',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
    public file:any;
  
    fileChange(input){
        const reader = new FileReader();
        if (input.files.length) {       
            this.file = input.files[0].name;            
        }
    }

    removeFile():void{
        this.file = '';
    }

}
=======
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-file-uploader',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
    public file:any;
  
    fileChange(input){
        const reader = new FileReader();
        if (input.files.length) {       
            this.file = input.files[0].name;            
        }
    }

    removeFile():void{
        this.file = '';
    }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
