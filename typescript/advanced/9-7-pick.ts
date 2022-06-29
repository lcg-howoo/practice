{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetadata = Pick<Video, 'id' | 'title'>

    function getVideo(id: string): Video {
        return {
            id: id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    //기존의 타입에서 원하는 속성과 value만을 뽑아서 사용할 수 있다.
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        }
    }

}
