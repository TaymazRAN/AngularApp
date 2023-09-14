// product.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from './product.actions';

export interface Product {
  id: number;
  title: string;
  price: number;
  // Add other properties as needed
}

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
);
