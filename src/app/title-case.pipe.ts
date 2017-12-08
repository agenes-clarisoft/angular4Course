import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return null;
    }

    let chunks: string[] = value.split(' ');

    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];
      if (i > 0 && this.isPreposition(chunk))
        chunks[i] = chunk.toLowerCase();
      else
        chunks[i] = this.toTitleCase(chunk);
    }

    return chunks.join(' ');
  }

  private isPreposition(word: string): boolean {
    let special = ['of', 'the'];

    return special.includes(word.toLowerCase())
  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

}
