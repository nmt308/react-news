import axios from 'axios';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import ArticleWithBg from '../ArticleWithBg';
import SkeletonLoading from '../ArticleWithBg/skeleton';

export default function HomeBlock3() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    apiKey: process.env.REACT_APP_API_KEY2,
                    forceMaxDataTimeWindow: 31,
                },
            })
            .then((res) => {
                setArticles(res.data.articles.results);
                setLoading(false);
            });
    }, []);
    const renderArticles = () => {
        if (articles.length > 0 && !loading) {
            return articles.map((article) => {
                return <ArticleWithBg data={article} />;
            });
        }
        if (articles.length === 0) {
            if (loading) {
                return Array.from(Array(3)).map((item) => <SkeletonLoading />);
            } else {
                return <div className="w-100 mt-5 text-center">No article was found. Please try again</div>;
            }
        }
    };
    return (
        <div className="news-homeblock3 py-5">
            <div className="container py-lg-5 py-md-4">
                <h3 className="section-title-left"> Most viewed today </h3>
                <div className="row top-pics">{renderArticles()}</div>
            </div>
        </div>
    );
}
