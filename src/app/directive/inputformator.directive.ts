import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputformator]'
})
export class InputformatorDirective {

  constructor(private elemRef : ElementRef) { }

  @HostListener('blur')
  onBlur() {
    // console.log("On Blur is triggred !");
    let value:string = this.elemRef.nativeElement.value;
    this.elemRef.nativeElement.value = value.toLowerCase();
  }
}
