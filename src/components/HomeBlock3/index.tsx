import { useEffect, useState } from 'react';
import request from '../../utils/request';
import ArticleWithBg from '../ArticleWithBg';

export default function HomeBlock3() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        request
            .get(`/top-headlines`, {
                params: {
                    country: 'gb',
                    apiKey: process.env.REACT_APP_API,
                    pageSize: '3',
                    language: 'en',
                },
            })
            .then((res) => {
                setArticles(res.data.articles);
            });
    });
    return (
        <div className="w3l-homeblock3 py-5">
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
