import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    
    subscribe(form) {
        console.log(form.value.email);
    }
}
