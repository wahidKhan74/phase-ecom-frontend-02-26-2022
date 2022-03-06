import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OneWayComponent } from './component/data/one-way/one-way.component';
import { TwoWayComponent } from './component/data/two-way/two-way.component';
import { CssBindingComponent } from './component/data/css-binding/css-binding.component';
import { EventBindingComponent } from './component/data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsModule } from './component/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { HighlightDirective } from './directive/highlight.directive';
import { InputformatorDirective } from './directive/inputformator.directive';
import { SummaryPipe } from './pipe/summary.pipe';
import { QuotesPipe } from './pipe/quotes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    OneWayComponent,
    TwoWayComponent,
    CssBindingComponent,
    EventBindingComponent,
    NotFoundComponent,
    HighlightDirective,
    InputformatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, SummaryPipe, QuotesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
