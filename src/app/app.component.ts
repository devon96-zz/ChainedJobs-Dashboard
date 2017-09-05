import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private d3: D3;
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element;
  }

  ngOnInit() {
    const d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);

      const svg = d3.select('svg'),
      width = +svg.attr('width'),
      height = +svg.attr('height'),
      g = svg.append('g').attr('transform', 'translate(40,0)');

      const cluster = d3.cluster();

    }
  }
}
