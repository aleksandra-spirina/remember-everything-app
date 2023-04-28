import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RememberAppComponent } from './remember-app/remember-app.component';
import { RememberAppModule } from './remember-app/remember-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		RememberAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
