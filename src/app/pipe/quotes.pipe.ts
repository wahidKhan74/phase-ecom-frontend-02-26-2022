import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotestext'
})
export class QuotesPipe implements PipeTransform {

  transform(value: string, limit?:number)  {
    if(!value)
      return null;
    return '"' +value+ '"';
  }

}
