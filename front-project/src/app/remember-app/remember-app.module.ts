import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberCardComponent } from './remember-card/remember-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { RememberAppComponent } from './remember-app.component';
import { CardsCatalogComponent } from './cards-catalog/cards-catalog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		RememberAppComponent,
		RememberCardComponent,
		AddCardComponent,
  CardsCatalogComponent
	],
	exports: [
		RememberAppComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class RememberAppModule { }
