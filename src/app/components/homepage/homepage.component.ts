import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  countries: any;

  constructor(private countriesService: CountriesService) {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
      console.log(countries);
    });
  }

  ngOnInit(): void {}
}
