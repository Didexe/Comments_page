export class Comment {
    id: number;
    description: string;
    type: string;
    date: string;

    constructor(id, description, type) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.date = this.genDate();
    }

    genDate() {
        return new Date().toISOString()
    }
}