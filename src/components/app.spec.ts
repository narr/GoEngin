import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from 'angular2/testing';

import { AppComponent } from './app.component';

export function main() {
  describe('AppComponent', () => {
    beforeEachProviders(() => [
      AppComponent
    ]);

    it('Class variable, isBigHeader should have an initial value, true',
      inject([AppComponent], app => {
        // expect(app.isBigHeader).toEqual(false);
        expect(app.isBigHeader).toEqual(true);
      }));
  });
}
