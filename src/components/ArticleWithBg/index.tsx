interface Article {
    data: {
        urlToImage: string;
        title: string;
        source: { name: string };
        publishedAt: string;
        url: string;
    };
}
export default function ArticleWithBg({ data }: Article) {
    const formatDate = (date: string): string => {
        var d = new Date(date),
            month = d.getMonth() + 1,
            day = d.getDate(),
            year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <div className="col-lg-4 col-md-6 mt-4">
            <div
                className="top-pic1"
                style={{ background: `url(${data.urlToImage}) no-repeat 0px 0px`, backgroundSize: 'cover' }}
            >
                <div className="card-body blog-details">
                    <a href={data.url} target="_blank" className="blog-desc news-title">
                        {data.title}
                    </a>
                    <div className="author align-items-center">
                        <img
                            src={data.urlToImage}
                            alt=""
                            className="img-fluid rounded-circle"
                            style={{ height: '55px' }}
                        />
                        <ul className="blog-meta">
                            <li>
                                <a>{data.source.name}</a>
                            </li>
                            <li className="meta-item blog-lesson">
                                <span className="meta-value"> {formatDate(data.publishedAt)} </span>
                                <span className="meta-value ml-2">
                                    <span className="fa fa-clock-o"></span> 1 min
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
