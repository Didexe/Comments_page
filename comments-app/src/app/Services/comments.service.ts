import { Injectable } from '@angular/core';
import { Db, genId } from '../db'
import { Comment } from '../Models/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  getComments(): Comment[] {
    return Db.sort((a: Comment, b: Comment) => {
      return b.date - a.date;
      });
  }

  getComment(id): Comment {
    return Db.find(function(comment) {
      return comment.id === id;
    })
  }

  addComment(description, type): Comment[] {
    let id = genId();
    Db.push(new Comment(id, description, type))
    return this.getComments();
  }

  editComment(comment): void {
    Db.forEach(comm => {
      if(comm.id == comment.id) {
        comm.description = comment.description;
        comm.type = comment.type;
        comm.date = Comment.genDate();
      }
    })
  }

  deleteComment(id): void {
    let indToDel = Db.findIndex(function(comment) {
      return comment.id === id;
    })
    Db.splice(indToDel, 1)
  }
}
