import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
export class AmazonHomeComponent {
  items: any[] = [
    { title: 'Clothes', image: 'box1_image.jpg' },
    { title: 'Health & Personal Care', image: 'box2_image.jpg' },
    { title: 'Furniture', image: 'box3_image.jpg' },
    { title: 'Electronics', image: 'box4_image.jpg' },
    { title: 'Beauty Picks', image: 'box5_image.jpg' },
    { title: 'Pet Care', image: 'box6_image.jpg' },
    { title: 'New Arrival in Toys', image: 'box7_image.jpg' },
    { title: 'Discover', image: 'box8_image.jpg' }
  ];
}
