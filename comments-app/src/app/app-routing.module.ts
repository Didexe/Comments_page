import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentSingleComponent } from './comment-single/comment-single.component';

const routes: Routes = [
  { path: '', redirectTo: '/comments', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'comment/:id', component: CommentSingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
