import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, property: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => {
      const value = property.split('.').reduce((o, p) => o && o[p], item);
      return value
        ? value.toString().toLowerCase().includes(searchTerm)
        : false;
    });
  }
}
