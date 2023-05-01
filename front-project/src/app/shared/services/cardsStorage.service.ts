import { Injectable } from "@angular/core";
import { Card } from "../inteface/Card";

@Injectable({ providedIn: 'root' })
export class CardsStorageService {
	storage: string = 'flippedCards';

	constructor() { 
		if (!localStorage.getItem(this.storage)) {
			localStorage.setItem(this.storage, JSON.stringify([]));
		}
	}

	public addCard(card: Card) {
		const list: string[] = this.getFlippedCards();
		list.push(card.id!);
		localStorage.setItem(this.storage, JSON.stringify(list));
	}

	public deleteCard(card: Card) {
		const list: string[] = this.getFlippedCards();
		const index = list.indexOf(card.id!, 0);
		if(index > -1) {
			list.splice(index, 1);
		}
		localStorage.setItem(this.storage, JSON.stringify(list));
	}

	public getFlippedCards() {
		return JSON.parse(localStorage.getItem(this.storage)!);
	}

	public clearData() {
		localStorage.clear();
	}
}