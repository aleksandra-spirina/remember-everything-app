import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICardsApiService } from "../inteface/ICardsApiService";
import { Card } from "../inteface/Card";
import { HttpClient } from "@angular/common/http";

const host = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class CardsApiService implements ICardsApiService {
	constructor(private httpClient: HttpClient) { }

	add(card: Card): Observable<void> {
		return this.httpClient.post<void>(host, card);
	}

	getAll(): Observable<Card[]> {
		return this.httpClient.get<Card[]>(host);
	}

	delete(card: Card): Observable<void> {
		return this.httpClient.delete<void>(`${host}/${card.id}`);
	}
}