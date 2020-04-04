import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import { SingInComponent } from './components/login/sing-in/sing-in.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChatComponent } from './components/chat/chat.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    SingInComponent,
    ChatComponent,
    ChatRoomComponent,
    VerifyEmailComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
