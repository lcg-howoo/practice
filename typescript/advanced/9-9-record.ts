{
    type PageInfo = {
        title: string;
    };

    type Page = 'home' | 'about' | 'contact';
    // 우리가 맵과 비슷하게 하나와 어떤 하나를 연결하고 싶을때 하나를 키를 쓰고 나머지를 다른 타입으로 묻고 싶을 때 사용
    // Page 를 key로 사용하고 PageInfo가 Value가 되는 구조
    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about: {title: 'About'},
        contact: {title: 'Title'}
    }

}
