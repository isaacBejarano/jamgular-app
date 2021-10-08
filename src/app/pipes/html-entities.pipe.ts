import {
  ElementRef,
  Injectable,
  Renderer2,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'HTMLEntities',
})
@Injectable({
  providedIn: 'root',
})
export class HTMLEntitiesPipe implements PipeTransform {
  constructor(private renderer: Renderer2) {}

  transform(entity: string): string {
    const textarea = this.renderer.createElement('textarea');
    const text: string = '' + entity;

    this.renderer.setProperty(textarea, 'innerHTML', text);

    return textarea.textContent;
  }
}
