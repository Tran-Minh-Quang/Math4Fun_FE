import {
  style,
  transition,
  trigger,
  animate,
  state,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Lottie from 'lottie-web';
import LottiePlayer from 'lottie-web';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      // add
      transition('void => *', [
        style({ backgroundColor: 'green' }),
        animate(1000),
      ]),
      // remove
      transition('* => void', [
        animate(1000, style({ backgroundColor: 'red', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
}
