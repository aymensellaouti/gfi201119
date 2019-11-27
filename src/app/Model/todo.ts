export class Todo {
  name: string;
  content: string;

  constructor(name: string = '', content: string = '') {
    this.name = name;
    this.content = content;
  }
}
