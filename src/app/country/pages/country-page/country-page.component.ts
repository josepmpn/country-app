import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

    countries  = input.required<RESTCountry[]>()
 }
