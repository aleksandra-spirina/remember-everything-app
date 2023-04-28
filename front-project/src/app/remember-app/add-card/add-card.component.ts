import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/shared/inteface/Card';

@Component({
	selector: 'app-add-card',
	templateUrl: './add-card.component.html',
	styleUrls: ['./add-card.component.less']
})
export class AddCardComponent {
	form: FormGroup = {} as FormGroup;

	@Output() add = new EventEmitter<Card>();

	constructor() {
		this.form = new FormGroup({
			term: new FormControl<string>('', [Validators.required]),
			definition: new FormControl<string>('', [Validators.required])
		});
	}

	submit(): void {
		let addData: Card = {
			term: this.form.get('term')?.value,
			definition: this.form.get('definition')?.value,
			fliped: false
		};

		this.add.next(addData);
		this.form.reset();
	}

}
