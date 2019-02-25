import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './shared/header/header.component';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {CvComponent} from './cv/cv.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ExtendedInfoComponent} from './extended-info/extended-info.component';
import {CvService} from './shared/services/cv.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoComponent,
    CvComponent,
    ExtendedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: 'InterfaceCV',
      useClass: CvService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
