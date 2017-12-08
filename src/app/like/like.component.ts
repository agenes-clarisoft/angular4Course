import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') count: number;
  @Input('isActive') liked: boolean;

  onClick() {
    this.count += this.liked ? -1 : +1;
    this.liked = !this.liked;
  }
}
