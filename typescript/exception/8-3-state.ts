{
    class TimeoutError extends Error {

    }

    class OfflineError extends Error {

    }
    type SuccesState = {
        result: 'success';
    }
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type ResultState = SuccesState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState {
            throw new OfflineError('no network')
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        login() {
            this.client.tryConnect();
        }
    }

    //try catch를 하는 곳에서의 의미가 있어야한다.
    class App {
        constructor(private userService: UserService) {
        }

        run() {
            try {
                this.userService.login();
            } catch (e) {
                //show dialog to user
                // error는 any타입이어서 아래 if절 처럼 못 사용한다.
                // if(e instanceof OfflineError){
                //     // error 처리
                // }
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
