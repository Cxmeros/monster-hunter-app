import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
  standalone: true
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number): string[] {
    const starImage = 'assets/img/star.png';
    const stars: string[] = [];
    for (let i = 0; i < value; i++) {
      stars.push(starImage);
    }
    return stars;
  }
}
