import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Pipe({
  name: 'safeLink'
})
export class SafeLinkPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer) {}

  transform(value: any, args?: any): any {
    if (value) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }

  }




}
