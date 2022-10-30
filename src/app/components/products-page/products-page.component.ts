import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  title = 'Angular app';
  isLoading = false;
  search = '';
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productsService
      .getAllProducts()
      .subscribe(() => (this.isLoading = false));
  }
}
