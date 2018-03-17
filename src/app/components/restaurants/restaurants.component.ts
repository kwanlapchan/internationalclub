import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html'
})

export class RestaurantsComponent {
    constructor(private router: Router) { }
}