interface Article {
    data: {
        author: string;
        urlToImage: string;
        title: string;
        description: string;
        content: string;
        source: { name: string };
        publishedAt: string;
        url: string;
    };
    showDescription?: boolean;
    showTag?: boolean;
}
export default function ArticleItem({ data, showDescription = true, showTag = true }: Article) {
    const formatDate = (date: string): string => {
        var d = new Date(date),
            month = d.getMonth() + 1,
            day = d.getDate(),
            year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <div className="card">
            <div className="card-header p-0 position-relative">
                <a href={data.url} target="_blank">
                    <img
                        className="card-img-bottom d-block radius-image-full"
                        src={data.urlToImage}
                        alt="Card"
                        height={250}
                    />
                </a>
            </div>
            <div className="card-body blog-details">
                {showTag && <span className="label-blue">General</span>}
                <a href={data.url} target="_blank" className="news-title blog-desc">
                    {data.title}
                </a>
                {showDescription && <p className="news-desc">{data.description}</p>}
                <div className="author align-items-center mt-2 mb-1">
                    <ul className="blog-meta">
                        <li>
                            <a>{data.source.name}</a>
                        </li>
                        <li className="meta-item blog-lesson">
                            <span className="meta-value"> Published At {formatDate(data.publishedAt)} </span>
                            <span className="meta-value ml-2">
                                <span className="fa fa-clock-o"></span> 1 min
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
