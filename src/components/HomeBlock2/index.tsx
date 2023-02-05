import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleItem from '../../components/ArticleItem';
import TopicItem from '../../components/TopicItem';
import request from '../../utils/request';
import SkeletonLoading from '../ArticleItem/skeleton';

export default function HomeBlock2() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        request
            .get('/article/getArticles', {
                params: {
                    lang: 'eng',
                    action: 'getArticles',
                    keyword: 'USA',
                    includeArticleImage: true,
                    articlesPage: 1,
                    articlesCount: 4,
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
                setLoading(false);
                setArticles(res.data.articles.results);
            });
    }, []);
    const renderArticles = () => {
        if (articles.length > 0 && !loading) {
            return articles.map((article) => {
                return (
                    <div className="col-lg-6 col-md-6 mt-4 item">
                        <ArticleItem data={article} />
                    </div>
                );
            });
        }
        if (articles.length === 0) {
            if (loading) {
                return Array.from(Array(4)).map((item) => (
                    <div className="col-lg-6 col-md-6 mt-4 item">
                        <SkeletonLoading />
                    </div>
                ));
            } else {
                return <div className="w-100 mt-5 text-center">No article was found. Please try again</div>;
            }
        }
    };
    return (
        <div className="news-homeblock2 py-5">
            <div className="container py-lg-5 py-md-4">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="section-title-left"> Editor's Pick </h3>
                        <div className="row">{renderArticles()}</div>
                        <div className="mt-4 left-right bg-clr-white p-3">
                            <h3 className="section-title-left align-self pl-2 mb-sm-0 mb-3">Advertise with us </h3>
                            <a className="btn btn-style btn-primary" href="https://newsapi.ai/pricing" target="_blank">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 trending mt-lg-0 mt-5">
                        <TopicItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
