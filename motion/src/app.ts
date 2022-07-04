import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";
import {VideoComponent} from "./components/page/item/video.js";
import {Component} from "./components/component.js";
import {InputDialog} from "./components/dialog/dialog.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/8a_aFG7TmgQ');
    this.page.addChild(video);

    const note = new NoteComponent('Note title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo title', 'Todo Body');
    this.page.addChild(todo);
    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      })

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가한다.
        dialog.removeFrom(document.body);
      })
      dialog.attachTo(document.body);
    })
    // const videoBtn = document.querySelector('.new-video')! as HTMLButtonElement;


  }
}

// as 타입 엘리어스하는 이유 동적으로 만드는 것이 아닌 정적인 타입인 경우에는 타입 엘리어스를 사용해도 괜찮다.
// ! 무조건 null이 아니고 htmlelement type으로 지정
new App(document.querySelector('.document')! as HTMLElement);
