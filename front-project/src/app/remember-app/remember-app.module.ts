import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberCardComponent } from './remember-card/remember-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { RememberAppComponent } from './remember-app.component';
import { CardsCatalogComponent } from './cards-catalog/cards-catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ICardsApiServiceToken } from '../shared/inteface/ICardsApiService';
import { CardsApiMockService } from '../shared/services/cardsApiMock.service';
import { CardsApiService } from '../shared/services/cardsApi.service';
import { HttpClientModule } from '@angular/common/http';

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
		ReactiveFormsModule, 
		HttpClientModule
	],
	providers: [
		{
			provide: ICardsApiServiceToken,
			useClass: CardsApiService
		}
	]
})
export class RememberAppModule { }
