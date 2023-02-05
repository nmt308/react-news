import ArticleItem from '../ArticleItem';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import { Link } from 'react-router-dom';
import SkeletonLoading from '../ArticleItem/skeleton';

export default function HomeBlock4({ category, className }: { category: string; className: string }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     request
    //         .get('/article/getArticles', {
    //             params: {
    //                 lang: 'eng',
    //                 action: 'getArticles',
    //                 keyword: category,
    //                 includeArticleImage: true,
    //                 articlesPage: 1,
    //                 articlesCount: 3,
    //                 articlesSortBy: 'date',
    //                 articlesSortByAsc: false,
    //                 articlesArticleBodyLen: -1,
    //                 resultType: 'articles',
    //                 dataType: ['news', 'pr'],
    //                 apiKey: process.env.REACT_APP_API_HOME1,
    //                 forceMaxDataTimeWindow: 31,
    //             },
    //         })
    //         .then((res) => {
    //             setArticles(res.data.articles.results);
    //             setLoading(false);
    //         });
    // }, []);
    const renderArticles = () => {
        if (articles.length > 0 && !loading) {
            return articles.map((article) => {
                return (
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <ArticleItem data={article} />
                    </div>
                );
            });
        }
        if (articles.length === 0) {
            if (loading) {
                return Array.from(Array(3)).map((item) => (
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <SkeletonLoading />
                    </div>
                ));
            } else {
                return <div className="w-100 mt-5 text-center">No article was found. Please try again</div>;
            }
        }
    };
    return (
        <div className={className}>
            <div className="container py-lg-5 py-md-4">
                <div className="left-right">
                    <h3 className="section-title-left mb-sm-4 mb-2"> {category}</h3>
                    <Link to={`/category/${category}`} className="more btn btn-small mb-sm-0 mb-4">
                        View more
                    </Link>
                </div>
                <div className="row">{renderArticles()}</div>
            </div>
        </div>
    );
}
