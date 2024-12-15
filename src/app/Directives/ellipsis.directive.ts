import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
})
export class EllipsisDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'whiteSpace', 'nowrap');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'textOverflow', 'ellipsis');
    this.renderer.setStyle(element, 'maxWidth', '200px');
  }
}
