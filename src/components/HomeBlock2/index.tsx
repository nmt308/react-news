import { useEffect, useState } from 'react';
import ArticleItem from '../../components/ArticleItem';
import TopicItem from '../../components/TopicItem';
import request from '../../utils/request';
export default function HomeBlock2() {
    //key f8e327afaffa440a8b386b8fa9b158f2
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        request
            .get(`/top-headlines`, {
                params: {
                    country: 'gb',
                    apiKey: process.env.REACT_APP_API1,
                    pageSize: '4',
                    language: 'en',
                },
            })
            .then((res) => {
                setArticles(res.data.articles);
            });
    });
    return (
        <div className="news-homeblock2 py-5">
            <div className="container py-lg-5 py-md-4">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="section-title-left"> Editor's Pick </h3>
                        <div className="row">
                            {articles.map((article) => {
                                return (
                                    <div className="col-lg-6 col-md-6 mt-4 item">
                                        <ArticleItem data={article} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-4 left-right bg-clr-white p-3">
                            <h3 className="section-title-left align-self pl-2 mb-sm-0 mb-3">Advertise with us </h3>
                            <a className="btn btn-style btn-primary" href="https://newsapi.org/pricing" target="_blank">
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
