import {BaseComponent} from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super('<section class="note">\n' +
        '  <h2 class="note__title">\n' +
        '  </h2>\n' +
        '  <p class="note__body"></p>\n' +
        '</section>');
    const titleElement = this.element.querySelector('.note__title')! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector('.note__body')! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
