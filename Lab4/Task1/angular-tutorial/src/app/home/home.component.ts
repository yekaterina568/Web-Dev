import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://angular.io/generated/images/marketing/home/homes-for-sale.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://angular.io/generated/images/marketing/home/homes-for-sale.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    }
  ];

  filterResults(text: string) {
    const defaultList: HousingLocation[] = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: 'https://angular.io/generated/images/marketing/home/homes-for-sale.jpg',
        availableUnits: 4,
        wifi: true,
        laundry: true
      },
      {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: 'https://angular.io/generated/images/marketing/home/homes-for-sale.jpg',
        availableUnits: 0,
        wifi: false,
        laundry: true
      }
    ];
  
    if (!text) {
      this.housingLocationList = defaultList;
    } else {
      this.housingLocationList = defaultList.filter(h =>
        h.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
  

    this.housingLocationList = this.housingLocationList.filter(housingLocation =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

