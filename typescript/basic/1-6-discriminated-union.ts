{
    //discriminated union 유니온 타입에 차별화되는 이름이 동일한  타입을 둠으로써 간편하게 구분할 수 있다.

    // funciton: login -> success or fail;
    type LoginState = SuccessState | FailState

    type Result = 'success' | "fail";
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }

    type FailState = {
        result: 'fail';
        reason: string;
    }


    function login(id: string, password: string): Promise<LoginState>{
        return new Promise((resolve, reject) => {
            resolve({
                result: "success",
                response: {
                    body: "login in!",
                }
            });
        })
    }

    // printLoginState(state: LoginState)
    // success -> congratulation
    // fail -> here to be sad
    function printLoginState(state: LoginState): void{
        if(state.result === 'success'){ //response가 state안에 있는 경우
            console.log(state.response.body);
        }else{
            console.log(state.reason);
        }
    }


}
