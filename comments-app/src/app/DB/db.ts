import { Comment } from "../Models/comment"

export const Db:Comment[] = []

let lastId = 0;

export function genId() {
    lastId++;
    return lastId;
}