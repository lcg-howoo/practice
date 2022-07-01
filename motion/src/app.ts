import {PageComponent} from "./components/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}
// as 타입 엘리어스하는 이유 동적으로 만드는 것이 아닌 정적인 타입인 경우에는 타입 엘리어스를 사용해도 괜찮다.
// ! 무조건 null이 아니고 htmlelement type으로 지정
new App(document.querySelector('.document')! as HTMLElement);
