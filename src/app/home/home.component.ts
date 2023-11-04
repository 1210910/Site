import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../houselocation';
import { HousingService } from '../housing.service';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterLink],
  template: `
    <section>
      <header class="brand-name">

        <nav>
          <ul class="menuItems">
            <li><a [routerLink]="['/']">
              <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
            </a></li>
            <li><a [routerLink]="['/']" data-item='Campus View'>Campus View</a></li>
            <li><a [routerLink]="['/building']" data-item='Buildings'>Buildings</a></li>
            <li><a [routerLink]="['/']" data-item='Floors'>Floors</a></li>
            <li><a [routerLink]="['/']" data-item='Passage Way'>Passage Way</a></li>
            <li><a [routerLink]="['/']" data-item='Rooms'>Rooms</a></li>
            <li><a [routerLink]="['/']" data-item='Lift'>Lift</a></li>
            <li >
              <div class="search-box">
                <button class="btn-search" type="button" (click)="filterResults(filter.value)"><i class="fa fa-search" aria-hidden="true"></i></button>
                <input type="text" class="input-search" placeholder="Filter by city" #filter   >
              </div>
            </li>
          </ul>
        </nav>
      </header>

    </section>
    <section>
      <h2>Results</h2>
        <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.housingLocationList;
    this.filteredLocationList = this.housingLocationList;
  }






  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
