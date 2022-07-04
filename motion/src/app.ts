import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {Component} from "./components/component.js";
import {InputDialog} from "./components/dialog/dialog.js";
import {MediaSectionInput} from "./components/dialog/input/media-input.js";
import {VideoComponent} from "./components/page/item/video.js";
import {TextSectionInput} from "./components/dialog/input/text-input.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      })
      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      })
    })

    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      })
      dialog.setOnSubmitListener(() => {
        const video = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      })
    })

    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      })
      dialog.setOnSubmitListener(() => {
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      })
    })

    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      })
      dialog.setOnSubmitListener(() => {
        const todo = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      })
    })

  }
}

// as 타입 엘리어스하는 이유 동적으로 만드는 것이 아닌 정적인 타입인 경우에는 타입 엘리어스를 사용해도 괜찮다.
// ! 무조건 null이 아니고 htmlelement type으로 지정
new App(document.querySelector('.document')! as HTMLElement, document.body);
