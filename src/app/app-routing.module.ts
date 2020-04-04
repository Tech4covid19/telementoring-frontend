import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import { SingInComponent } from './components/login/sing-in/sing-in.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { MedicalProfileComponent } from './components/medical-profile/medical-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
      { path: '', component: SingInComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
    ],
  },
  {
    path: 'chat-room',
    component: ChatRoomComponent,
  },
  {
    path: 'medical-profile',
    component: MedicalProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
