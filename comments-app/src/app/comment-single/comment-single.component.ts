import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../Services/comments.service'
import { Comment } from '../Models/comment'
 
@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrls: ['./comment-single.component.less']
})
export class CommentSingleComponent implements OnInit {
  @Input() comment: Comment;
  id: number;
  displayDelDialog: boolean;
  displayEditDialog: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CommentsService: CommentsService
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getComment();
  }

  getComment(): void {
    this.comment = this.CommentsService.getComment(this.id);
  }

  deleteComment(): void {
    this.CommentsService.deleteComment(this.id);
    // this.router.navigateByUrl('/comments');
    this.router.navigate(['/comments', { queryParams: {delete: 'success'} }]);
  }

  editComment(type, description): void {
    // this.CommentsService.editComment(this.comment);
    this.CommentsService.editComment({id: this.comment.id, type, description})
    this.router.navigate(['/comments', { queryParams: {edit: 'success'} }]);
  }

  showDialog(name: string): void {
    switch(name) {
      case 'delete':
        this.displayDelDialog = true;
      break
      
      case 'edit':
          this.displayEditDialog = true;
    }
  }

  hideDialog(name: string): void {
    switch(name) {
      case 'delete':
        this.displayDelDialog = false;
      break
      
      case 'edit':
          this.displayEditDialog = false;
    }
  }
}
