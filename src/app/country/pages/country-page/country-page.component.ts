import { Component, inject, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationPageComponent } from './country-information-page/country-information-page.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent,CountryInformationPageComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      return this.countryService.searchCountryByAlphaCode(request.code);
    },
  });
 }
