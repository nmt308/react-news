import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from '../../utils/request';
import { Box } from '@mui/system';
import { Breadcrumbs } from '@mui/material';
import { IDetail } from '../../Interface/IDetail';
import NotImage from '../../assets/images/NotImage.png';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
export default function ArticleDetail() {
    const { uid } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState<IDetail>({
        uri: '',
        url: '',
        date: '',
        body: '',
        source: {
            title: '',
            uri: '',
        },
        author: {
            name: '',
        },
        time: '',
        image: '',
        title: '',
    });
    const [articles, setArticles] = useState<IDetail[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [uid]);
    const handleNavigate = (uri: string) => {
        setDetail({
            uri: '',
            url: '',
            date: '',
            body: '',
            source: {
                title: '',
                uri: '',
            },
            author: {
                name: '',
            },
            time: '',
            image: '',
            title: '',
        });
        setArticles([]);
        navigate(`/article/${uri}`);
    };
    const renderArticles = () => {
        return articles.map((article) => {
            return (
                <article className="post">
                    <figure className="post-thumb">
                        <img src={article.image} alt="" className="h-100" />
                    </figure>
                    <div className="text">
                        <a
                            onClick={() => {
                                handleNavigate(article.uri);
                            }}
                        >
                            {article.title}
                        </a>
                    </div>
                    <div className="post-info">{article.date}</div>
                </article>
            );
        });
    };
    useEffect(() => {
        const getArticle = async () => {
            await request
                .get('/article/getArticle', {
                    params: {
                        lang: 'eng',
                        action: 'getArticles',
                        articleUri: uid,
                        includeArticleImage: true,
                        articlesArticleBodyLen: -1,
                        dataType: ['news', 'pr'],
                        apiKey: process.env.REACT_APP_API_KEY3,
                    },
                })
                .then((res) => {
                    setDetail(res.data[`${uid}`].info);
                });
            await request
                .get('/article/getArticles', {
                    params: {
                        lang: 'eng',
                        action: 'getArticles',
                        keyword: 'Europe',
                        includeArticleImage: true,
                        articlesCount: 4,
                        articlesSortBy: 'date',
                        articlesSortByAsc: false,
                        articlesArticleBodyLen: -1,
                        resultType: 'articles',
                        dataType: ['news', 'pr'],
                        apiKey: process.env.REACT_APP_API_KEY3,
                        forceMaxDataTimeWindow: 31,
                    },
                })
                .then((res) => {
                    setArticles(res.data.articles.results);
                });
        };
        getArticle();
    }, [uid]);
    return articles.length === 0 ? (
        <Loading />
    ) : (
        <section className="text-11 py-5">
            <div className="text11 py-lg-5 py-md-4">
                <div className="container">
                    <div className="blog-title">
                        <h3 className="title-big">{detail?.title}</h3>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: '12px 16px',
                                margin: '1.5rem 0',
                                backgroundColor: 'white',
                            }}
                        >
                            <Breadcrumbs aria-label="breadcrumb">
                                <ul className="blog-list">
                                    <li>
                                        <p>
                                            {' '}
                                            Posted on <strong>{detail?.date}</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            {' '}
                                            By{' '}
                                            <a target="_blank" href={`https://www.${detail?.source.uri}`}>
                                                <strong>{detail?.source.title || 'Thomas Jahme'}</strong>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            {' '}
                                            <strong>1 min read</strong>
                                        </p>
                                    </li>
                                </ul>
                            </Breadcrumbs>
                        </Box>
                    </div>
                </div>
                <div className="image mb-sm-5 mb-4 text-center">
                    <img src={detail?.image} alt="" className="img-fluid radius-image-full" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="text11-content">
                                <h4 className="mt-sm-3">{detail?.title}</h4>
                                <p className="mb-3">{detail?.body}</p>
                                <h5 className="quote">
                                    For dull and lifeless skin, mix apple juice with honey. Apply a thin layer to your
                                    face, and leave it for 5 minutes.
                                    <footer className="blockquote-footer mt-3"> Kelvin edison </footer>
                                </h5>

                                <p className="mb-3">
                                    Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
                                    elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..
                                </p>
                                <div className="sing-post-thumb mb-lg-5 mb-4 row pt-3">
                                    <div className="col-md-6">
                                        <a>
                                            <img src={detail?.image} className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-3 align-self">
                                        <p className="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                                            tempora quisquam incidunt accusantium culpa voluptatibus, nulla qui a
                                            quibusdam porro? luctus justo. ac purus semper. Fusce faucibus ante vitae
                                            justo efficitur elementum. Donec ipsum.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    Source:{' '}
                                    <a target="_blank" href={`https://www.${detail?.source.uri}`}>
                                        {detail?.source.uri}
                                    </a>{' '}
                                    - {detail?.source.title}
                                </div>
                            </div>
                            <div className="leave-comment-form mt-5" id="comment">
                                <h3 className="aside-title">Leave a reply</h3>
                                <form action="#" method="post">
                                    <div className="input-grids">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="Email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="Comment"
                                                className="form-control"
                                                placeholder="Your Comment"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit text-right">
                                        <button className="btn btn-style btn-primary">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
                            <aside className="sidebar">
                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="author">
                                        <div className="sidebar-title">
                                            <h4>About source</h4>
                                        </div>
                                        <div className="author-detalis">
                                            <a href={`https://www.${detail?.source.uri}`} className="author-image">
                                                <img alt="error" src={NotImage} className="h-100 img-fluid" />
                                            </a>
                                            <div className="author-info">
                                                <a
                                                    target="_blank"
                                                    href={`https://www.${detail?.source.uri}`}
                                                    className="author-name"
                                                >
                                                    {detail?.source.title}
                                                </a>
                                                <a
                                                    target="_blank"
                                                    href={`https://www.${detail?.source.uri}`}
                                                    className="btn btn-outline-primary"
                                                >
                                                    Visit site{' '}
                                                </a>
                                            </div>
                                        </div>
                                        <p className="mt-4">
                                            Breaking News, Latest News and Current News from {detail?.source.uri}.
                                            Breaking news and video. Latest Current News: U.S., World, Entertainment,
                                            Health, Business, ...
                                        </p>
                                    </div>
                                </div>

                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="sidebar-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul className="blog-cat">
                                        <li>
                                            <Link to="/category/health">Health</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/business">Business</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/sports">Sports</Link>
                                        </li>
                                        <li>
                                            <Link to="/category/recreation">Recreation</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title">
                                        <h4>You may like it</h4>
                                    </div>

                                    {renderArticles()}
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
