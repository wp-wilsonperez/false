<<<<<<< HEAD
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'profilePicture'})
export class ProfilePicturePipe implements PipeTransform {
  transform(input:string, ext = 'jpg'):string {
    return '../assets/img/profile/' + input + '.' + ext;
  }
}
=======
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'profilePicture'})
export class ProfilePicturePipe implements PipeTransform {
  transform(input:string, ext = 'jpg'):string {
    return '../assets/img/profile/' + input + '.' + ext;
  }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
