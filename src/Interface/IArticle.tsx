export interface IArticle {
    data: {
        uri: string;
        url: string;
        date: string;
        body: string;
        source: {
            title: string;
            uri: string;
        };
        author: {
            name: string;
        };
        time: string;
        image: string;
        title: string;
    };
    showDescription?: boolean;
    showTag?: boolean;
}
