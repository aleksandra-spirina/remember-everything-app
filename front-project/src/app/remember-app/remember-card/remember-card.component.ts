import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Card } from 'src/app/shared/inteface/Card';

@Component({
	selector: 'app-remember-card',
	templateUrl: './remember-card.component.html',
	styleUrls: ['./remember-card.component.less']
})
export class RememberCardComponent {
	@Input() card!: Card;
	transitionInProgress = false;

	@ViewChild("cardContent", { static: false, read: ElementRef }) cardContent: ElementRef = {} as ElementRef;
	element: Element = {} as Element;

	@Output() delete = new EventEmitter<Card>();
	@Output() flip = new EventEmitter<Card>();

	ngAfterViewInit(): void {

		this.element = this.cardContent.nativeElement;
		let clickStream = fromEvent(this.element, 'transitionend');

		clickStream.subscribe(event => {
			this.transitionInProgress = false;
		});
	}

	flipCard(): void {
		this.transitionInProgress = true;
		this.flip.next(this.card);
	}

	deleteCard(): void {
		this.delete.next(this.card);
	}

	onCard(event: Event): void {
		if (!this.transitionInProgress) {
			if ((event.target as HTMLElement).classList.contains('card__close')) {
				this.deleteCard();
			} else {
				this.flipCard();
			}
		}
	}
}
