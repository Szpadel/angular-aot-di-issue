import {InjectionToken, ModuleWithProviders, NgModule, Inject} from '@angular/core';

export const VALUE = new InjectionToken('factory');

export function factory(value: () => number) {
  return value();
}

export const someFunction = () => 123;

export function createModule(value: InjectionToken<any>): ModuleWithProviders {
  return {
    ngModule: Module,
    providers: [
      {
        provide: VALUE,
        useFactory: factory,
        deps: [
          value
        ]
      },
    ]
  };
}

@NgModule({})
export class Module {
}
