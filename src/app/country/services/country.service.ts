import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';

const API_URL='https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http=inject(HttpClient);

  searchCapital(query:string):Observable<Country[]>{
    query = query.toLocaleLowerCase();

    console.log(query);

    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((restCountries) =>CountryMapper.mapRestCountryArrayToCountryArray(restCountries))
      );

  };
}
