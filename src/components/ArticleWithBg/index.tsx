import { Link } from 'react-router-dom';
import NullImage from '../../assets/images/NotImage.png';
import { IArticle } from '../../Interface/IArticle';
export default function ArticleWithBg({ data }: IArticle) {
    return (
        <div className="col-lg-4 col-md-6 mt-4">
            <div
                className="top-pic1"
                style={{ background: `url(${data.image || NullImage}) no-repeat 0px 0px`, backgroundSize: 'cover' }}
            >
                <div className="card-body blog-details">
                    <Link to={`/article/${data.uri}`} className="blog-desc news-title">
                        {data.title}
                    </Link>
                    <div className="author align-items-center">
                        <img
                            src={data.image || NullImage}
                            alt={data.source.uri}
                            className="img-fluid rounded-circle"
                            style={{ height: '55px' }}
                        />
                        <ul className="blog-meta">
                            <li>
                                <a>{data.source.title ?? data.author.name ?? '@John_Mathan'}</a>
                            </li>
                            <li className="meta-item blog-lesson">
                                <span className="meta-value"> Published At {data.date} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
