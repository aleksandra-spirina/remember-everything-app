import { Injectable } from "@angular/core";
import { ICardsApiService } from "../inteface/ICardsApiService";
import { Observable, of } from "rxjs";
import { Card } from "../inteface/Card";

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

@Injectable({providedIn: 'root'})
export class CardsApiMockService implements ICardsApiService {
	private cards: Card[] = [];

	constructor() {
		this.cards = startData;
	}

	add(card: Card): Observable<void> {
		this.cards.push(card);
		return of();
	}

	getAll(): Observable<Card[]> {
		return of(this.cards);
	}

	delete(card: Card): Observable<void> {
		let index = this.cards.indexOf(card);
		this.cards.splice(index, 1);
		return of();
	}
}