import { Inject, Injectable } from "@angular/core";
import { Card } from "../inteface/Card";
import { ICardsApiService, ICardsApiServiceToken } from "../inteface/ICardsApiService";
import { CardsStorageService } from "./cardsStorage.service";

@Injectable({ providedIn: 'root' })
export class CardsService {
	private _cards: Card[] = [];

	constructor(@Inject(ICardsApiServiceToken) public cardsService: ICardsApiService,
		public cardsStorageService: CardsStorageService) { }

	get cards(): Card[] {
		return this._cards;
	}

	initialize(): void {
		this.cardsService.getAll().subscribe(cards => {
			this._cards = cards;
			// check if card was flipped
			let flippedCards = this.cardsStorageService.getFlippedCards();
			this._cards.forEach(elem => {
				if (flippedCards.indexOf(elem.id) > -1) {
					elem.flipped = true;
				}
			});
		});
	}

	addCard(card: Card): void {
		this.cardsService.add(card).subscribe(() => {
			this.initialize();
		});
	}

	deleteCard(card: Card): void {
		this.cardsService.delete(card).subscribe(() => {
			this.initialize();
		});
	}

	flipCard(card: Card): void {
		this._cards.forEach((elem) => {
			if (elem === card) {
				elem.flipped = !elem.flipped;

				// add or delete card from storage
				if (elem.flipped) {
					this.cardsStorageService.addCard(elem);
				} else {
					this.cardsStorageService.deleteCard(elem);
				}
			}
		});
	}

	flipAllCards(): void {
		this._cards.forEach((elem) => {
			elem.flipped = false;
		});

		this.cardsStorageService.clearData();
	}
}