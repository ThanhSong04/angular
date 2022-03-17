import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CarComponent } from './components/car/car.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarComponent,
    CheckoutComponent,
    LoginComponent,
    DetailComponent,
    IntroduceComponent,
    NewsComponent,
    ContactComponent,
    PromotionComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'cart', component: CarComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'promotion', component: PromotionComponent },
      { path: 'news', component: NewsComponent },
      { path: 'blog', component: BlogComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
