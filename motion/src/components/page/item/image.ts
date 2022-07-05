import {BaseComponent} from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement>{

  constructor(title: string, url: string) {
    super('<section class="image">\n' +
        '  <div class="image__holder">\n' +
        '    <img src="" alt="" class="image__thumbnail">\n' +
        '    <h2 class="page-item__title image__title"></h2>\n' +
        '  </div>\n' +
        '</section>');
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
