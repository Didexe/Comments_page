import { Injectable } from '@angular/core';
import { Db, genId } from './db'
import { Comment } from './comment'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  getComments(): Comment[] {
    return Db;
  }

  getComment(id): Comment {
    return Db.find(function(comment) {
      return comment.id === id;
    })
  }

  addComment(description, type): void {
    let id = genId()
    Db.push(new Comment(id, description, type))
  }

  editComment(comment): void {
    Db.forEach(comm => {
      if(comm.id == comment.id) {
        comm.description = comment.description
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
