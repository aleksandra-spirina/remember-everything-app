import { Observable } from "rxjs";
import { Card } from "./Card";
import { InjectionToken } from "@angular/core";

export const ICardsApiServiceToken = new InjectionToken('ICardsApiServiceToken');

export interface ICardsApiService {
	add(card: Card): Observable<void>;

	getAll(): Observable<Card[]>;

	delete(card: Card): Observable<void>;
}