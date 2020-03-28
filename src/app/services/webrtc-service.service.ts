import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebrtcServiceService {
  private webrtc$ = new RTCPeerConnection({
    iceServers: [
      {
        urls: ['stun:stun.stunprotocol.org']
      }
    ]
  });

  constructor() {
    this.webrtc$.
  }
}
