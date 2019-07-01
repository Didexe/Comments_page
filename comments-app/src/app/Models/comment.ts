export class Comment {
    id: number;
    description: string;
    type: string;
    date: number;

    constructor(id, description, type) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.date = Comment.genDate();
    }

    static genDate() {
        return new Date().getTime()
    }
}