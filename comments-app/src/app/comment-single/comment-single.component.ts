import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../comments.service'
import { Comment } from '../comment'
 
@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrls: ['./comment-single.component.less']
})
export class CommentSingleComponent implements OnInit {
  @Input() comment: Comment;
  id: number;
  displayDelDialog: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CommentsService: CommentsService
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getComment();
  }

  getComment() {
    this.comment = this.CommentsService.getComment(this.id);
  }

  deleteComment() {
    this.CommentsService.deleteComment(this.id);
    this.router.navigateByUrl('/comments');
  }

  editComment() {
    this.CommentsService.editComment(this.comment);
    this.router.navigateByUrl('/comments');
  }

  showDeleteDialog() {
    this.displayDelDialog = true;
  }

  hideDeleteDialog() {
    this.displayDelDialog = false;
  }
}
