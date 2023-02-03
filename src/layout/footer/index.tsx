import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="app-footer">
            <footer className="footer-28 py-5">
                <div className="footer-bg-layer">
                    <div className="container py-lg-3">
                        <div className="row footer-top-28">
                            <div className="col-lg-4 footer-list-28 copy-right mb-lg-0 mb-sm-5 mt-sm-0 mt-4">
                                <a className="navbar-brand mb-3" href="index.html">
                                    <span className="fa fa-newspaper-o"></span> NewsBlog
                                </a>
                                <p className="copy-footer-28"> © 2023. All Rights Reserved. </p>
                                <h5 className="mt-2">
                                    Get articles with <a href="https://newsapi.org/">News API</a>
                                </h5>
                            </div>
                            <div className="col-lg-8 row">
                                <div className="col-sm-4 col-6 footer-list-28">
                                    <h6 className="footer-title-28">Useful links</h6>
                                    <ul>
                                        <li>
                                            <a href="#">Blogs</a>
                                        </li>
                                        <li>
                                            <a href="#">Advertise with us</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Authors</a>
                                        </li>
                                        <li>
                                            <a href="#">Get in touch</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-6 footer-list-28">
                                    <h6 className="footer-title-28">Categories</h6>
                                    <ul>
                                        <li>
                                            <Link to="/healthy">Healthy</Link>
                                        </li>
                                        <li>
                                            <Link to="/sports">Sports</Link>
                                        </li>
                                        <li>
                                            <Link to="/entertainment">Entertainment</Link>
                                        </li>
                                        <li>
                                            <Link to="/business">Business</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-6 footer-list-28 mt-sm-0 mt-4">
                                    <h6 className="footer-title-28">Social Media</h6>
                                    <ul className="social-icons">
                                        <li className="facebook">
                                            <a href="#">
                                                <span className="fa fa-facebook"></span> Facebook
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            {' '}
                                            <a href="#">
                                                <span className="fa fa-twitter"></span> Twitter
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            {' '}
                                            <a href="#">
                                                <span className="fa fa-linkedin"></span> Linkedin
                                            </a>
                                        </li>
                                        <li className="dribbble">
                                            <a href="#">
                                                <span className="fa fa-dribbble"></span> Dribbble
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
