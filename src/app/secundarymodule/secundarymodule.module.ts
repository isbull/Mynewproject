import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecundarymoduleRoutingModule } from './secundarymodule-routing.module';
import { SecundaryComponent } from './secundary/secundary.component';
import { ImagesService } from '../shared/images.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [SecundaryComponent],
  imports: [
    CommonModule,
    SecundarymoduleRoutingModule, HttpClientModule, MatTableModule
  ], providers: [ImagesService]
})
export class SecundarymoduleModule { }
