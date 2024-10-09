import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
{path: '', component: PaiComponent},
{path: 'filho', component: FilhoComponent},
{path: 'filho/:id', component: ItemDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
