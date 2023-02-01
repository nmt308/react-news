import NullImage from '../../assets/images/NotImage.png';
import { useNavigate } from 'react-router-dom';
import { title } from 'process';
interface Article {
    data: {
        author: string;
        urlToImage: string;
        title: string;
        description: string;
        content: string;
        source: { name: string };
        publishedAt: string;
    };
}

export default function ArticleWithAvt({ data }: Article) {
    const navigate = useNavigate();
    const formatDate = (date: string): string => {
        var d = new Date(date),
            month = d.getMonth() + 1,
            day = d.getDate(),
            year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div
            className="col-lg-6 mt-4"
            onClick={() => {
                navigate(`/article/${data.title}`);
            }}
        >
            <div className="bg-clr-white hover-box">
                <div className="row">
                    <div className="col-sm-5 position-relative">
                        <a className="image-mobile w-100 h-100 d-block">
                            <img
                                className="card-img-bottom d-block radius-image-full"
                                src={data.urlToImage || NullImage}
                                alt="Card"
                            />
                        </a>
                    </div>
                    <div className="col-sm-7 card-body blog-details align-self">
                        <a className="blog-desc">{data.title}</a>
                        <div className="author align-items-center">
                            <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                            <ul className="blog-meta">
                                <li>
                                    <a href="author.html">{data.source.name || 'Ambe JohnBee'}</a>
                                </li>
                                <li className="meta-item blog-lesson">
                                    <span className="meta-value">Published At: {formatDate(data.publishedAt)} </span>.{' '}
                                    <span className="meta-value ml-2">
                                        <span className="fa fa-clock-o"></span> 1 min
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
