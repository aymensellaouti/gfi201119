import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): any {
    if (path.trim().length === 0) {
      return 'default.png';
    }
    return path;
  }

}
