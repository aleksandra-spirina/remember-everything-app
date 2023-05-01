import { Component, Input } from '@angular/core';
import { Card } from 'src/app/shared/inteface/Card';
import { CardsService } from 'src/app/shared/services/cards.service';

@Component({
	selector: 'app-cards-catalog',
	templateUrl: './cards-catalog.component.html',
	styleUrls: ['./cards-catalog.component.less']
})
export class CardsCatalogComponent {
	@Input()
	set newCard(card: Card | undefined) {
		if (card) {
			this.cardsService.addCard(card);
		}
	}

	constructor(public cardsService: CardsService) {
		this.cardsService.initialize();
	}

	deleteCard(card: Card): void {
		this.cardsService.deleteCard(card);
	}

	flipCard(card: Card): void {
		this.cardsService.flipCard(card);
	} 

	flipAllCards(): void {
		this.cardsService.flipAllCards();
	}
}
