import {BaseComponent, Component} from "../component.js";
import {Composable} from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(
        '<dialog class="dialog">\n' +
        ' <div class="dialog__container">\n' +
        '   <button class="close">\n' +
        '     &times;\n' +
        '   </button>\n' +
        '   <div id="dialog__body"></div>\n' +
        '   <button class="dialog__submit">ADD</button>\n' +
        ' </div>\n' +
        '</dialog>\n'
    );
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    /*
    closeBtn.addEventListener('click', "")로 하는 것이 더 좋다.[정석]
    왜?
    closeBtn에 keyEvent도 걸려있는 상황에서 click 이벤트도 추가하고 싶은 경우 addEventListener를 사용해야 한다.
    반면 아래 closeBtn.onclick 으로 할당할 경우 기존 이벤트를 지우고 덮어씌어진다.
    * */

    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    }

    const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    }
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
