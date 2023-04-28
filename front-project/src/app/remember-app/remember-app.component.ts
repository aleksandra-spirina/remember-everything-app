import { Component } from '@angular/core';
import { Card } from '../shared/inteface/Card';

@Component({
  selector: 'app-remember-app',
  templateUrl: './remember-app.component.html',
  styleUrls: ['./remember-app.component.less']
})
export class RememberAppComponent {
	newCard: Card | undefined = undefined;

	addCard(card: Card):void {
		this.newCard = card;
	}
}
