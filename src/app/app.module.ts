import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BodyComponent } from './body/body.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { AlfaComponent } from './alfa/alfa.component';
import {MatChipsModule} from '@angular/material/chips';
import { BetaComponent } from './beta/beta.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GammaComponent } from './gamma/gamma.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeltaComponent } from './delta/delta.component';
import {MatSortModule} from '@angular/material/sort';
import { EpsilonComponent } from './epsilon/epsilon.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DsetaComponent } from './dseta/dseta.component';
import {MatInputModule} from '@angular/material/input';
import { EtaComponent } from './eta/eta.component';
import {MatSliderModule} from '@angular/material/slider';
import { ThetaComponent } from './theta/theta.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AlfaComponent,
    BetaComponent,
    GammaComponent,
    DeltaComponent,
    EpsilonComponent,
    DsetaComponent,
    EtaComponent,
    ThetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CommonModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule,
    MatChipsModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatInputModule, MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
