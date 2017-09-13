import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FeatureModule} from './feature/module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FeatureModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
