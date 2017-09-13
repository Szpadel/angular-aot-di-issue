import {InjectionToken, NgModule} from '@angular/core';

import {someFunction, createModule} from './some-feature';

const TOKEN = new InjectionToken('not exported token');

@NgModule({
  declarations: [
  ],
  imports: [
    createModule(TOKEN)
  ],
  providers: [
    {provide: TOKEN, useValue: someFunction},
  ],
})
export class FeatureModule {
  moduleMethod() {
    return 'hello from module';
  }
}
