import ArticleItem from '../ArticleItem';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import { Link } from 'react-router-dom';

export default function HomeBlock4({ category, className }: { category: string; className: string }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        request
            .get('/article/getArticles', {
                params: {
                    lang: 'eng',
                    action: 'getArticles',
                    keyword: category,
                    includeArticleImage: true,
                    articlesPage: 1,
                    articlesCount: 3,
                    articlesSortBy: 'date',
                    articlesSortByAsc: false,
                    articlesArticleBodyLen: -1,
                    resultType: 'articles',
                    dataType: ['news', 'pr'],
                    apiKey: process.env.REACT_APP_API_HOME1,
                    forceMaxDataTimeWindow: 31,
                },
            })
            .then((res) => {
                setArticles(res.data.articles.results);
            });
    }, []);

    return (
        <div className={className}>
            <div className="container py-lg-5 py-md-4">
                <div className="left-right">
                    <h3 className="section-title-left mb-sm-4 mb-2"> {category}</h3>
                    <Link to={`/category/${category}`} className="more btn btn-small mb-sm-0 mb-4">
                        View more
                    </Link>
                </div>
                <div className="row">
                    {articles.map((article) => (
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <ArticleItem data={article} showDescription={false} showTag={false} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
