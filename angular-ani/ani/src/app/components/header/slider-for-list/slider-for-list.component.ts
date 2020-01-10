import { Component } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slider-for-list',
  templateUrl: './slider-for-list.component.html',
  styleUrls: ['./slider-for-list.component.css']
})
export class SliderForListComponent {
  formGroupa: any;
  constructor(
    public animeProvider: AnimeProviderService,
    public authService: AuthService
  ) {}
  setValue(i, e) {
    if (e.checked) {
      this.animeProvider.listToShow$.next(true);
    } else {
      this.animeProvider.listToShow$.next(false);
    }
  }
}
