// imported plugins
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({

  // variables
  name: 'safeHtml',
})

export class SafePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer) {}
  
  // transform the value
  transform(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
