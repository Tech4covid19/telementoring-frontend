import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { SingInComponent } from './components/login/sing-in/sing-in.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      { path: 'verify-email', component: VerifyEmailComponent }
    ]
  },
  {
    path: 'chat-room',
    component: ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
