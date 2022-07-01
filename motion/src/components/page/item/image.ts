export class ImageComponent {

  private element: HTMLElement;


  constructor(title: string, url: string) {
    const template = document.createElement('template');
    template.innerHTML =
        '<section class="image">\n' +
        '  <div class="image__holder">\n' +
        '    <img src="" alt="" class="image__thumbnail">\n' +
        '    <p class="image__title"></p>\n' +
        '  </div>\n' +
        '</section>';

    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
