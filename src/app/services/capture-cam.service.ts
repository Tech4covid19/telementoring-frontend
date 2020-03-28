import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptureCamService {
  constructor() {}

  capture(): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({
      video: true
    });
  }
}
