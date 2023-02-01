import HomeBlock from '../../components/HomeBlock';
import HomeSlide from '../../components/HomeSlide';
import ArticleItem from '../../components/ArticleItem';
import TopicItem from '../../components/TopicItem';
import ArticleWithBg from '../../components/ArticleWithBg';
export default function Home() {
    return (
        <>
            <HomeBlock />
            <HomeSlide />
            <div className="w3l-homeblock2 py-5">
                <div className="container py-lg-5 py-md-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="section-title-left mb-4"> Editor's Pick </h3>
                            <div className="row">
                                <ArticleItem />
                                <ArticleItem />
                            </div>
                            <div className="mt-4 left-right bg-clr-white p-3">
                                <h3 className="section-title-left align-self pl-2 mb-sm-0 mb-3">Advertise with us </h3>
                                <a className="btn btn-style btn-primary" href="#url">
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
            <div className="w3l-homeblock3 py-5">
                <div className="container py-lg-5 py-md-4">
                    <h3 className="section-title-left mb-4"> Top Pick's of this month </h3>
                    <div className="row top-pics">
                        <ArticleWithBg />
                        <ArticleWithBg />
                        <ArticleWithBg />
                    </div>
                </div>
            </div>
        </>
    );
}
