import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageHeelComponent } from './pages/page-heel/page-heel.component';

const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'products', component: HomeComponent},
  {path: 'heel', component: PageHeelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
