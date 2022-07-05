import {BaseComponent} from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super('<section class="video__player">\n' +
        '  <iframe src="" frameborder="0" class="video__iframe"></iframe>\n' +
        '  <h3 class="page-item__title video__title"></h3>\n' +
        '</section>');
    const iframe = this.element.querySelector('.video__iframe')! as HTMLInputElement
    iframe.src = this.convertToEmbeddedURL(url);
    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string):string {
    //정규표현식 이용
    const regExp =
        /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9_]{11}))|(?:youtube.be\/([a-zA-Z0-9_]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if(videoId){
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
