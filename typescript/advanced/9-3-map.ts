{
    type Video = {
        title: string;
        author: string;
        description: string;
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }

    type VideoReadOnly = {
        readonly title: string;
        readonly author: string;
        readonly description: string;
    }

    // 여기저기 다시 타입 선언해서 처리해야 한다. 이를 해결하기위 map 타입을 쓴다.
    //mappedType
    type Optional<T> = {
        [P in keyof T]?: T[P]//for... in 과 같다
    };

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'title'
    }
    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'fox'
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]?: T[P]
    };

    animal.name = 'hi';

    const book: ReadOnly<Video> = {
        title: "hello world"
    }
    // book.title = 'hello2';

    type Nullable<T> = {
        [P in keyof T]?: T[P] | null
    }
    
    const obj4 : Nullable<Video> = {
        title: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxyfy<T> = {
        [P in keyof T]: Proxy<T[P]>
    };
}

