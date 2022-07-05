import {BaseComponent} from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(
        '<section class="todo">\n' +
        '  <h2 class="page-item__title todo__title">\n' +
        '  </h2>\n' +
        '  <input type="checkbox" class="todo-checkbox"/>\n' +
        ' <label for="todo-checkbox" class="todo-label"></label>\n '+
        '</section>'
    );
    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector('.todo-checkbox')! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
