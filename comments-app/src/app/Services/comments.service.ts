import { Injectable } from '@angular/core';
import { Db, genId } from '../DB/db'
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

  editComment(comment): Promise<string> {
    let indToEdit = Db.findIndex((comm) => {
      return comment.id === comm.id;
    })

    if(indToEdit >= 0) {
      Db[indToEdit].description = comment.description;
      Db[indToEdit].type = comment.type;
      Db[indToEdit].date = Comment.genDate();
      return Promise.resolve('Comment successfuly edited')
    } else {
      return Promise.reject('Comment not found')
    }
  }

  deleteComment(id): Promise<string> {
    let indToDel = Db.findIndex(function(comment) {
      return comment.id === id;
    })
    if(indToDel >= 0) {
      Db.splice(indToDel, 1)
      return Promise.resolve('Comment successfuly deleted')
    } else {
      return Promise.reject('Comment not found')
    }
  }
}
