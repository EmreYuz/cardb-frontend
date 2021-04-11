import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'brandFilterPipe',
})
export class BrandFilterPipePipe implements PipeTransform {
  transform(value: Car[], brandfilterText: string): Car[] {
    brandfilterText = brandfilterText ? brandfilterText.toLocaleLowerCase() : '';
    return brandfilterText
      ? value.filter(
          (c: Car) => c.brandName.toLocaleLowerCase().indexOf(brandfilterText) !== -1
        )
      : value;
  }
}
