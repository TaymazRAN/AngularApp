// product.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from './product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
