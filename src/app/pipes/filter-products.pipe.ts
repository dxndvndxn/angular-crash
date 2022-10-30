import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/products';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[] | null, search: string): IProduct[] {
    if (!products?.length && products !== null && !search) {
      return products;
    }

    return products
      ? products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }
}
