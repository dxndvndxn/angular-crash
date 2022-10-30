import { Injectable, Input } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from '../models/products';
import { ErrorService } from './error.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  @Input() products: IProduct[] = [];
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({ fromObject: { limit: 6 } }),
      })
      .pipe(
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  private errorHandler({ message }: HttpErrorResponse) {
    this.errorService.handle(message);
    return throwError(() => message);
  }

  createProduct(product: IProduct) {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((product) => {
          this.products = [...this.products, product];
        })
      );
  }
}
