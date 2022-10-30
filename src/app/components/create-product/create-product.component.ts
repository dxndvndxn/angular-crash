import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  get title() {
    return this.form.controls.title;
  }

  submit() {
    console.log(this.form);
    if (!this.title.errors) {
      this.productsService
        .createProduct({
          title: this.form.value.title as string,
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
          rating: {
            rate: 42,
            count: 2,
          },
        })
        .subscribe(() => {
          this.modalService.close();
        });
    }
  }
}
