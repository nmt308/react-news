import ArticleItem from '../ArticleItem';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import { Link } from 'react-router-dom';

export default function HomeBlock4({ category, className }: { category: string; className: string }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        request
            .get(`/top-headlines`, {
                params: {
                    country: 'gb',
                    apiKey: process.env.REACT_APP_API3,
                    category: category,
                    pageSize: '3',
                    language: 'en',
                },
            })
            .then((res) => {
                setArticles(res.data.articles);
            });
    });
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
