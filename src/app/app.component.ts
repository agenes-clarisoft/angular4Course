import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';

  viewMode = 'smth';

  courses;

  onAdd() {
    this.courses.push({ id: 4, name: 'Course 4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'Changed';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Course 1'},
      { id: 2, name: 'Course 2'},
      { id: 3, name: 'Course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
