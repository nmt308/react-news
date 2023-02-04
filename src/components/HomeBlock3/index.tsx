import axios from 'axios';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import ArticleWithBg from '../ArticleWithBg';

export default function HomeBlock3() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        request
            .get('/article/getArticles', {
                params: {
                    lang: 'eng',
                    action: 'getArticles',
                    keyword: 'Ukraine',
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
        <div className="news-homeblock3 py-5">
            <div className="container py-lg-5 py-md-4">
                <h3 className="section-title-left"> Most viewed today </h3>
                <div className="row top-pics">
                    {articles.map((article) => (
                        <ArticleWithBg data={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}
