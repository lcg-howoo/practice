import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//하나의 컴포넌트에 속하는 모든 테스트는 한 테스트 suite(세트) 그룹에 들어간다.

describe('Greeting component', () => {
  test('renders "Hello world" as a text', () => {
    //arrange 테스트 데이터, 조건, 환경 설정
    render(<Greeting/>)
    //act 로직 실행
    // 이 테스트에는 없다.
    //assert 실행 결과와 예상 결과 비교교
    const helloWorldElement = screen.getByText('Hello world');
    expect(helloWorldElement).toBeInTheDocument();
  })

  test('renders "good to see you" if the button was Not clicked', () => {
    //arrange
    render(<Greeting/>);
    //act

    //assert
    const outputElement = screen.getByText('good to see you', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //arrange
    render(<Greeting/>);

    //act
    // 실제 화면에서 사용자 이벤트를 작동시키도록 돕는 객체
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText('Changed', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });


  // test('does not render "good to see you" if the button was clicked', () => {
  //   //arrange
  //   render(<Greeting/>);
  //
  //   //act
  //   // 실제 화면에서 사용자 이벤트를 작동시키도록 돕는 객체
  //   const buttonElement = screen.getByRole('button');
  //   userEvent.click(buttonElement);
  //
  //   //assert
  //   const outputElement = screen.getByText('good to see you', {exact: false});
  //   // expect(outputElement).toBeInTheDocument();
  //   expect(outputElement).toBeNull();
  // });

});
