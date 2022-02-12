import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = ''): T[] | null {

    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (!key) {
      return value.filter(
        product => Object.values(product).join(' ').toLowerCase().includes(phrase)
      );
    }

    return value.filter(product => {
      const data = String(product[key]).toLowerCase();
      return data.includes(phrase);
    });
  }

}