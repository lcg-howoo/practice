{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    //기존의 타입에서 원하는 속성과 value만을 제외해서 사용할 수 있다.
    // 'any'는 없지만 입력은 가능.
    type VideoMetadata = Omit<Video, 'url' | 'data' | 'any'>

    function getVideo(id: string): Video {
        return {
            id: id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        }
    }

}
