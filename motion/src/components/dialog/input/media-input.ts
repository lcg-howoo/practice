import {BaseComponent} from "../../component.js";
import {MediaData} from "../dialog.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> implements MediaData{
  constructor() {
    super(
        '<div>\n' +
        '  <div class="form__container">\n' +
        '    <label for="title">TITLE</label>\n' +
        '    <input type="text" id="title">\n' +
        '  </div>\n' +
        '  <div class="form__container">\n' +
        '    <label for="url">URL</label>\n' +
        '    <input type="text" id="url">\n' +
        '  </div>\n' +
        '</div>'
    );
  }
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
