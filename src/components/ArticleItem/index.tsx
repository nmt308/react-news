import { Link } from 'react-router-dom';
import NullImage from '../../assets/images/NotImage.png';
import { IArticle } from '../../Interface/IArticle';
export default function ArticleItem({ data, showDescription = true, showTag = true }: IArticle) {
    return (
        <div className="card">
            <div className="card-header p-0 position-relative">
                <Link to={`/article/${data.uri}`}>
                    <img
                        className="card-img-bottom d-block radius-image-full"
                        src={data.image || NullImage}
                        alt={data.source.uri}
                        height={250}
                    />
                </Link>
            </div>
            <div className="card-body blog-details">
                {showTag && <span className="label-blue">General</span>}
                <Link to={`/article/${data.uri}`} className="news-title blog-desc">
                    {data.title}
                </Link>
                {showDescription && <p className="news-desc">{data.body}</p>}
                <div className="author align-items-center mt-2 mb-1">
                    <ul className="blog-meta">
                        <li>
                            <a>{data.source.title ?? data.author.name ?? '@John_Mathan'}</a>
                        </li>
                        <li className="meta-item blog-lesson">
                            <span className="meta-value"> Published At {data.date} </span>
                            <span className="meta-value ml-2">
                                <span className="fa fa-clock-o"></span> {data.time}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
