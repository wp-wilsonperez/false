<<<<<<< HEAD
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SearchPipe' })
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(person => {
        if (person.name) {
          return person.name.search(searchText) !== -1;
        }
      });
    }
  }
}
=======
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SearchPipe' })
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(person => {
        if (person.name) {
          return person.name.search(searchText) !== -1;
        }
      });
    }
  }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
