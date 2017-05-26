<<<<<<< HEAD
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'appPicture'})
export class AppPicturePipe implements PipeTransform {

  transform(input:string):string {
    return '../assets/img/' + input;
  }
=======
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'appPicture'})
export class AppPicturePipe implements PipeTransform {

  transform(input:string):string {
    return '../assets/img/' + input;
  }
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
}