import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {NotFoundError} from "../common/not-found-error";
import {AppError} from "../common/app-error";
import {BadInput} from "../common/bad-input";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
      this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            //this.form.setErrors(error.originalError);
            alert('An unexpected error occurred.');
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('this post has already been deleted');
          else throw error;
        });
  }

}
