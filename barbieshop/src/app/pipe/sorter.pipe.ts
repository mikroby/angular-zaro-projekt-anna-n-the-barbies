import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, sortBy: string = '', direction: number): T[] | null {

    if (!sortBy || !Array.isArray(value)) {
      return value;
    }


    return value.sort((a, b) => {
      if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
        return (a[sortBy] - b[sortBy]) * direction;
      }
      if (sortBy === "address") {
        return ((Object.values(a[sortBy])).join('').toLowerCase().localeCompare((Object.values(b[sortBy])).join(' ').toLowerCase()
        )) * direction;
      }
      return (String(a[sortBy]).toLowerCase().localeCompare(String(b[sortBy])
        .toLowerCase())) * direction;
    });
  }
}

