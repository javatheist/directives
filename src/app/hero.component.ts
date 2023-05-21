import { Component } from '@angular/core';

import { LoadingState } from './loading-state';
import { Hero, heroes } from './hero';

@Component({
  selector: 'app-hero',
  template: `
    <button (click)="onLoadHero()">Load Hero</button>
    <p *appIfLoaded="heroLoadingState">{{ heroLoadingState.data | json }}</p>
  `,
})
export class HeroComponent {
  heroLoadingState: LoadingState<Hero> = { type: 'loading' };

  onLoadHero(): void {
    this.heroLoadingState = { type: 'loaded', data: heroes[0] };
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/