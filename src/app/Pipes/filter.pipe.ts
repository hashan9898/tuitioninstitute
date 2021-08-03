import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, subject: string): unknown {
    const resultArray = [];
    if(value.length === 0 || filterString === '' || subject ===''){
      return value;
    }

    for (const item of value) {
      if(item[subject] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
