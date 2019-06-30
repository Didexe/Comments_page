import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service'
import { Comment } from '../comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  // description: string;
  // type: string;
  constructor(private CommentsService: CommentsService) { }

  ngOnInit() {
    this.getComments()
  }

  getComments() {
    this.comments = this.CommentsService.getComments()
  }

  addComment(description, type) {
    this.CommentsService.addComment(description, type)
  }
}
