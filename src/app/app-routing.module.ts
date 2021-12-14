import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FruitcakeComponent } from './components/fruitcake/fruitcake.component';
import { NormalcakeComponent } from './components/normalcake/normalcake.component';
import { ChocolatecakeComponent } from './components/chocolatecake/chocolatecake.component';
import { MinicakeComponent } from './components/minicake/minicake.component';
import { FancycakeComponent } from './components/fancycake/fancycake.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: "/product", pathMatch:'full' }, //default path
  {path: 'home', component: HomeComponent},
  {path: 'fruitcake', component: FruitcakeComponent},
  {path: 'normalcake', component: NormalcakeComponent},
  {path: 'chocolatecake', component: ChocolatecakeComponent},
  {path: 'minicake', component: MinicakeComponent},
  {path: 'fancycake', component: FancycakeComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
