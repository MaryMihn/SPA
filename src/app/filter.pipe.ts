import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(newsCards: any[], seach: Object): any {
        if (seach===undefined) {
            return newsCards;
        }
        console.log(seach)
        return newsCards.filter(card => card.title.toLowerCase().includes(seach.toLocaleString))
}
}
