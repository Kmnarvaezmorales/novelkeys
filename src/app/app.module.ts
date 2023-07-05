import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { KeyboardPageComponent } from './additional pages/keyboard-page/keyboard-page.component';
import { KeycapsPageComponent } from './additional pages/keycaps-page/keycaps-page.component';
import { SwitchPageComponent } from './additional pages/switch-page/switch-page.component';
import { TfuePageComponent } from './additional pages/tfue-page/tfue-page.component';
import { DeskpadsPageComponent } from './additional pages/deskpads-page/deskpads-page.component';
import { SuppliesPageComponent } from './additional pages/supplies-page/supplies-page.component';
import { MerchPageComponent } from './additional pages/merch-page/merch-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    CardsComponent,
    KeyboardPageComponent,
    KeycapsPageComponent,
    SwitchPageComponent,
    TfuePageComponent,
    DeskpadsPageComponent,
    SuppliesPageComponent,
    MerchPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
