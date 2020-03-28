import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSingIn() {
    this.router.navigateByUrl('/chat-room');
  }
}
