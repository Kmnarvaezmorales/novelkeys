import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KeyboardPageComponent } from './additional pages/keyboard-page/keyboard-page.component';
import { KeycapsPageComponent } from './additional pages/keycaps-page/keycaps-page.component';
import { SwitchPageComponent } from './additional pages/switch-page/switch-page.component';
import { TfuePageComponent } from './additional pages/tfue-page/tfue-page.component';
import { DeskpadsPageComponent } from './additional pages/deskpads-page/deskpads-page.component';
import { SuppliesPageComponent } from './additional pages/supplies-page/supplies-page.component';
import { MerchPageComponent } from './additional pages/merch-page/merch-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'keyboards', component: KeyboardPageComponent },
  { path: 'keycaps', component: KeycapsPageComponent },
  { path: 'switches', component: SwitchPageComponent },
  { path: 'tfue', component: TfuePageComponent },
  { path: 'deskpads', component: DeskpadsPageComponent },
  { path: 'supplies', component: SuppliesPageComponent },
  { path: 'merch', component: MerchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
