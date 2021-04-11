import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListerComponent } from '../app/components/coin-lister/coin-lister.component';

const routes: Routes = [
  { path: '', component: CoinListerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
