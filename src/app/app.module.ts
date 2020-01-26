import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatGridListModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule

  } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ClientComponent } from './client/client.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LayoutModule } from '@angular/cdk/layout';
import { InfosComponent } from './infos/infos.component';
import { VoitureaddComponent } from './voitureadd/voitureadd.component';
import { ClientaddComponent } from './clientadd/clientadd.component';
import { LocationaddComponent } from './locationadd/locationadd.component';
import { InfosclientComponent } from './infosclient/infosclient.component';
import { InfoslocationComponent } from './infoslocation/infoslocation.component';
import { ClientService } from './services/client.service';
import { VoitureService } from './services/voiture.service';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'voiture', component: VoitureComponent },
  { path: 'client', component: ClientComponent },
  { path: 'location', component: LocationComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'addcar', component: VoitureaddComponent },
  { path: 'addclient', component: ClientaddComponent },
  { path: 'addlocation', component: LocationaddComponent },
  { path: 'infosclient', component: InfosclientComponent },
  { path: 'infoslocation', component: InfoslocationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VoitureComponent,
    ClientComponent,
    LocationComponent,
    InfosComponent,
    VoitureaddComponent,
    ClientaddComponent,
    LocationaddComponent,
    InfosclientComponent,
    InfoslocationComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatGridListModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  FlexLayoutModule,
  LayoutModule


  ],
  exports: [RouterModule],
  providers: [ClientService, VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
