{
    // Union Types : Or으로 이해해도 좋다.
    // 선택 사항이 있는 경우이면서 그 선택 값으로 처리해야한다.
    type Direction = 'left' | 'right' | 'up' | 'down'; //딱 4가지인 경우 그 값들로만 나오도록 지정해준다.

    function move(direction: Direction){
        console.log(direction);
    }
    // move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;
    // 발생할 수 있는 다양한 케이스 중에 하나만 정하고 싶을 때 쓰인다.
    // function: login -> success or fail;
    type Result = 'success' | "fail";
    type SuccessState = {
        response: {
            body: string;
        }
    }

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState

    function login2(id: string, password: string): Promise<LoginState>{
        return new Promise((resolve, reject) => {
            resolve({
                response: {
                    body: "login in!",
                }
            });
        })
    }

    // printLoginState(state: LoginState)
    // success -> congratulation
    // fail -> here to be sad
    function printLoginState2(state: LoginState): void{
        console.log("state : ", state)
        if('response' in state){ //response가 state안에 있는 경우
            console.log(state.response.body);
        }else{
            console.log(state.reason);
        }
    }
    printLoginState2({
        response: {
            body: 'success'
        }
    })

    let person = {
        name : "lee",
        address : "osan",
        job : "programmer",
        family : {
            mother : {
                name: "kim",
                age: 40,
                job: "doesn't hava a job"
            }
        }
    }

    if("mother" in person) {
        console.log("person 객체 안에 family 속성이 있습니다.");
    }

    //discriminated union 유니온 타입에 차별화되는 이름이 동일한  타입을 둠으로써 간편하게 구분할 수 있다.

}
