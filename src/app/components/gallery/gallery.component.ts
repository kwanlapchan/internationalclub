import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html'
})

export class GalleryComponent implements OnInit {
    pictures = [
        "../../assets/images/gallery/picture1.jpg",
        "../../assets/images/gallery/picture2.jpg",
        "../../assets/images/gallery/picture3.jpg",
        "../../assets/images/gallery/picture4.jpg",
        "../../assets/images/gallery/picture5.jpg",
        "../../assets/images/gallery/picture6.jpg",
        "../../assets/images/gallery/picture7.jpg",
        "../../assets/images/gallery/picture8.jpg",
        "../../assets/images/gallery/picture9.jpg",
        "../../assets/images/gallery/picture10.jpg",
        "../../assets/images/gallery/picture11.jpg",
        "../../assets/images/gallery/picture12.jpg",
        "../../assets/images/gallery/picture13.jpg",
        "../../assets/images/gallery/picture14.jpg",
        "../../assets/images/gallery/picture15.jpg",
        "../../assets/images/gallery/picture16.jpg",
        "../../assets/images/gallery/picture17.jpg",
        "../../assets/images/gallery/picture18.jpg",
        "../../assets/images/gallery/picture19.jpg",
        "../../assets/images/gallery/picture20.jpg",
        "../../assets/images/gallery/picture21.jpg",
        "../../assets/images/gallery/picture22.jpg",
        "../../assets/images/gallery/picture23.jpg",
        "../../assets/images/gallery/picture24.jpg",
        "../../assets/images/gallery/picture25.jpg",
        "../../assets/images/gallery/picture26.jpg",
        "../../assets/images/gallery/picture27.jpg",
        "../../assets/images/gallery/picture28.jpg",
        "../../assets/images/gallery/picture29.jpg",
        "../../assets/images/gallery/picture30.jpg",
        "../../assets/images/gallery/picture31.jpg",
        "../../assets/images/gallery/picture32.jpg",
        "../../assets/images/gallery/picture33.jpg",
        "../../assets/images/gallery/picture34.jpg",
        "../../assets/images/gallery/picture35.jpg",
        "../../assets/images/gallery/picture36.jpg",
        "../../assets/images/gallery/picture37.jpg"
    ]

    constructor() { }

    ngOnInit() {
        
    }
}