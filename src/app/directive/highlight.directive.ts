import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elementRef : ElementRef, private render:Renderer2) { 
    this.elementRef.nativeElement.style.backgroundColor ='grey';
    this.elementRef.nativeElement.style.padding ='20px';
  }

}
