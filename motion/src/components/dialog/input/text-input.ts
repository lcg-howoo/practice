import {BaseComponent} from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(
        '<div>\n' +
        '  <div class="form__container">\n' +
        '    <label for="title">TITLE</label>\n' +
        '    <input type="text" id="title">\n' +
        '  </div>\n' +
        '  <div class="form__container">\n' +
        '    <label for="body">Body</label>\n' +
        '    <textarea type="text" rows="3" id="body"></textarea>\n' +
        '  </div>\n' +
        '</div>'
    );
  }
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get body(): string {
    const element = this.element.querySelector('#body')! as HTMLInputElement;
    return element.value;
  }
}
