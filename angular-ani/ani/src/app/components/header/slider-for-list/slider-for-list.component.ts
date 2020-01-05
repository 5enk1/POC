import { Component } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slider-for-list',
  templateUrl: './slider-for-list.component.html',
  styleUrls: ['./slider-for-list.component.css']
})
export class SliderForListComponent {
  formGroupa: any;
  constructor(public animeProvider: AnimeProviderService) {}
  setValue(i, e) {
    if (e.checked) {
      this.animeProvider.test111$.next(true);
    } else {
      this.animeProvider.test111$.next(false);
    }
  }
}
