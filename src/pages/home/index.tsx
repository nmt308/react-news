import HomeBlock from '../../components/HomeBlock';
import HomeSlide from '../../components/HomeSlide';
import HomeBlock2 from '../../components/HomeBlock2';
import HomeBlock3 from '../../components/HomeBlock3';
import HomeBlock4 from '../../components/HomeBlock4';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <HomeBlock />
            <HomeSlide />
            <HomeBlock2 />
            <HomeBlock3 />
            <HomeBlock4 className="news-homeblock2 py-5" category="Sports" />
            <HomeBlock4 className="news-homeblock2 news-homeblock5 py-5" category="Business" />
            <HomeBlock4 className="news-homeblock2 news-homeblock6 py-5" category="Entertainment" />
            <div className="news-subscribe py-5">
                <div className="container py-lg-5 py-md-4">
                    <div className="news-subscribe-content text-center bg-clr-white py-md-5 py-2">
                        <div className="py-5">
                            <h3 className="section-title-left mb-2">Subscribe to our newsletter!</h3>
                            <p className="mb-md-5 mb-4">
                                We'll send you the best of our blog just once a month. We promise.{' '}
                            </p>
                            <form action="#" method="GET" className="subscribe">
                                <input
                                    type="email"
                                    className="subscribe_input"
                                    name="search"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-style btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
