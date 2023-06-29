import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.scss'],
})
export class MathjaxComponent implements OnInit, OnChanges {
  @Input() content!: string;
  mathJaxObject: any;

  constructor(public gs: GlobalService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['content']) {
      // console.log("content chnaged")
      this.renderMath();
    }
  }

  renderMath() {
    // console.log("render math")
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    this.mathJaxObject = this.gs.nativeGlobal()['MathJax'];
    //setInterval(()=>{},1)
    let angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject.Hub.Queue(
        ['Typeset', angObj.mathJaxObject.Hub],
        'mathContent'
      );
    }, 1000);
  }
  loadMathConfig() {
    this.mathJaxObject = this.gs.nativeGlobal()['MathJax'];
    this.mathJaxObject.Hub.Config({
      showMathMenu: false,
      tex2jax: {
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)'],
        ],
      },
      menuSettings: { zoom: 'Double-Click', zscale: '150%' },
      CommonHTML: { linebreaks: { automatic: true } },
      'HTML-CSS': { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } },
    });
  }

  ngOnInit() {
    this.loadMathConfig();
    this.renderMath();
  }
}
