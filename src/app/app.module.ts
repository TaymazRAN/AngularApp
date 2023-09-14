import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './product.reducer';
import { ProductEffects } from './product.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects, ]),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
