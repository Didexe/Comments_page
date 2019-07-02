import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../Services/comments.service'
import { Comment } from '../Models/comment'
import { ToastrService } from "ngx-toastr";
 
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
    private CommentsService: CommentsService,
    private toaster: ToastrService
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getComment();
  }

  getComment(): void {
    this.comment = this.CommentsService.getComment(this.id);
  }

  deleteComment(): void {
    this.CommentsService
      .deleteComment(this.id)
      .then(
        (message) => {
          this.toaster.success(message)
        }
    )
    .catch((error) => {
      this.toaster.error(error)
    })
    this.router.navigateByUrl('/comments');    
  }

  editComment(type, description): void {
    this.CommentsService
      .editComment({id: this.comment.id, type, description})
      .then(
        (message) => {
          this.toaster.success(message)
        }
      )
      .catch((error) => {
      this.toaster.error(error)
    })
    this.router.navigateByUrl('/comments');
  }

  showDialog(name: string): void {
    switch(name) {
      case 'delete':
        this.displayDelDialog = true;
      break
      
      case 'edit':
        this.displayEditDialog = true;
        break
    }
  }

  hideDialog(name: string): void {
    switch(name) {
      case 'delete':
        this.displayDelDialog = false;
        break
      
      case 'edit':
        this.displayEditDialog = false;
        break
    }
  }

  goToAllComments() {
    this.router.navigateByUrl('/comments');
  }
}
