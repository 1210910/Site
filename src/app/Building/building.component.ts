import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../houselocation";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-building',
   standalone: true,
    imports: [CommonModule, RouterLink],
  template: `
      <section>
          <header class="brand-name">

              <nav>
                  <ul class="menuItems">
                      <li><a [routerLink]="['/home']">
                          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
                      </a></li>
                      <li><a [routerLink]="['/buildingCreate']" data-item='Create'>Create</a></li>
                      <li><a [routerLink]="['/buildingEdit']" data-item='Edit'>Edit</a></li>
                      <li><a [routerLink]="['/buildingList']" data-item='List'>List</a></li>

                  </ul>
              </nav>
          </header>

      </section>
      <section class="cd-intro">
        <div class="cd-intro-content bouncy">
          <h1>Building</h1>
          <p>With this feature you can: Create, edit and list  building</p>
        </div>
      </section>
  `,
  styleUrls: ["./building.component.css"]

})

export class BuildingComponent{
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocation[] = [];

    constructor() {
        this.housingLocationList = this.housingService.housingLocationList;
        this.filteredLocationList = this.housingLocationList;
    }








}
