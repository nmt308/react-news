import NullImage from '../../assets/images/NotImage.png';
import { Link } from 'react-router-dom';
import { IArticle } from '../../Interface/IArticle';
export default function ArticleWithAvt({ data }: IArticle) {
    return (
        <div className="col-lg-6 mt-4">
            <div className="bg-clr-white hover-box h-100">
                <div className="row h-100">
                    <div className="col-sm-5 position-relative">
                        <Link className="image-mobile w-100 h-100 d-block" to={`/article/${data.uri}`}>
                            <img
                                className="card-img-bottom d-block radius-image-full"
                                src={data.image || NullImage}
                                alt={data.source.uri}
                            />
                        </Link>
                    </div>
                    <div className="col-sm-7 card-body blog-details align-self" style={{ paddingLeft: '10px' }}>
                        <Link className="blog-desc" to={`/article/${data.uri}`}>
                            {data.title}
                        </Link>
                        <div className="author align-items-center">
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
            </div>
        </div>
    );
}
