import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecundaryComponent } from './secundary/secundary.component';


const routes: Routes = [{ path: 'secundary', component: SecundaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecundarymoduleRoutingModule { }
