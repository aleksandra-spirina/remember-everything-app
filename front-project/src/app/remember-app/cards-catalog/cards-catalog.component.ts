import { Component, Input } from '@angular/core';
import { Card } from 'src/app/shared/inteface/Card';

const startData: Card[] = [
	{
		term: 'Страх',
		definition: 'неприятное чувство'
	},
	{
		term: 'Работа',
		definition: 'приятная необходимость'
	},
	{
		term: 'Отдых',
		definition: 'необходимая приятность'
	},
	{
		term: 'Обед',
		definition: 'отдых в середине дня'
	}
]

@Component({
	selector: 'app-cards-catalog',
	templateUrl: './cards-catalog.component.html',
	styleUrls: ['./cards-catalog.component.less']
})
export class CardsCatalogComponent {
	cards: Card[] = [];

	@Input()
	set newCard(card: Card | undefined) {
		if (card) {
			this.cards.push(card);
		}
	}

	constructor() {
		this.cards = startData;
	}

	deleteCard(card: Card): void {
		let index = this.cards.indexOf(card);
		this.cards.splice(index, 1);
	}

	flapCards(card: Card): void {
		this.cards.forEach((elem) => {
			if (elem !== card) {
				elem.fliped = false;
			} else {
				elem.fliped = !elem.fliped;
			}
		});
	}
}
