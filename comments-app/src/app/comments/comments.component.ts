import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../Services/comments.service'
import { Comment } from '../Models/comment'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  constructor(
    private CommentsService: CommentsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
    })
    this.getComments()
  }

  getComments() {
    this.comments = this.CommentsService.getComments().sort((a: any, b: any) => {
      return b.date - a.date
    });
  }

  addComment(description, type) {
    this.comments = this.CommentsService.addComment(description, type)
  }
}