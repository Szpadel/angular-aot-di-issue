import {Component, Inject} from '@angular/core';
import {VALUE} from './feature/some-feature';
import {FeatureModule} from './feature/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    featureModule: FeatureModule,
    @Inject(VALUE) value: number
  ) {
    console.log(value); // 123
    console.log(featureModule); // with aot: ƒ () { return 123; } without aot: FeatureModule {}
  }
}
