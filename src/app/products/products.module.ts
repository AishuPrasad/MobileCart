import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RatingComponent } from './rating.component';
import { OrderByPipe } from './product-list/orderby.pipe';
import { AuthGuardService } from './auth-guard.service';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    CartComponent,
    ProductDetailComponent,
    ProductListComponent,
    RatingComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  providers: [ProductService, AuthGuardService]

})
export class ProductsModule { }
