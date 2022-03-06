import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ProductService } from 'src/app/service/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from 'src/app/pipe/summary.pipe';
import { QuotesPipe } from 'src/app/pipe/quotes.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent,
    SummaryPipe,
    QuotesPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[ProductService,SummaryPipe,QuotesPipe]
})
export class ProductsModule { }
