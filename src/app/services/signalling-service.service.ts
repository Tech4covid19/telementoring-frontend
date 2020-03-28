import { environment } from './../../environments/environment';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignallingServiceService {
  private socket$: WebSocketSubject<any>;

  get webSocket(): WebSocketSubject<any> {
    return this.socket$;
  }

  constructor() {
    this.socket$ = new WebSocketSubject(
      environment.webRTCConfig.signalingServerAddress
    );
  }

  send(message) {
    this.socket$.next(message);
  }
}
