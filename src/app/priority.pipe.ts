import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
  standalone: true
})
export class PriorityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value !== 'string'){
      return null;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
