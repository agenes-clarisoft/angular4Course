import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  tweet = {
    body: 'here is the body of the tweet ...',
    isLiked: true,
    likesCount: 10
  }
}
