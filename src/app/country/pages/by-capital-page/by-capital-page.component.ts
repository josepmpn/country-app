import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

    countryService = inject(CountryService);
    query = signal ('');

    countryResource = resource({
       request: () => ({ query: this.query()}),
       loader: async ({request}) =>{
        if (!request.query) return [];
        return await firstValueFrom(
           this.countryService.searchCapital(request.query)
        );
       },
    });
  }
   /* isLoading = signal(false);
    isError = signal<string|null>(null);
    countries = signal<Country[]>([]);


    onSearch(query:string){

      if( this.isLoading()) return;

      this.isLoading.set(true);
      this.isError.set(null);


      console.log({query});

      this.countryService.searchCapital(query)
      .subscribe({next:(countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) =>{
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(`No se encontró con esa capital: ${query}`);
      }
      });*/



       /* (countries)=>{
        this.isLoading.set(false);
        this.countries.set(countries);

        //const c = CountryMapper.mapRestCountryArrayToCountryArray(countries);

        console.log(countries);
      });*/


     /* onSearch(query:string){
        this.countryService.searchCapital(query).subscribe((resp) =>{
          console.log(resp);
        })
      }*/


