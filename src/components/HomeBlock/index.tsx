import { Link } from 'react-router-dom';
export default function HomeBlock() {
    return (
        <section className="news-homeblock1 py-sm-5 py-4">
            <div className="container py-md-4">
                <div className="grids-area-hny main-cont-wthree-fea row">
                    <div className="col-lg-3 col-6 grids-feature">
                        <Link to="/category/health">
                            <div className="area-box">
                                <span className="fa fa-bath"></span>
                                <h4 className="title-head">Health</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 grids-feature">
                        <Link to="/category/sports">
                            <div className="area-box">
                                <span className="fa fa-futbol"></span>
                                <h4 className="title-head">Sports</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                        <Link to="/category/recreation">
                            <div className="area-box">
                                <span className="fa fa-photo-film"></span>
                                <h4 className="title-head">Recreation</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                        <Link to="/category/business">
                            <div className="area-box">
                                <span className="fa fa-pie-chart"></span>
                                <h4 className="title-head">Business</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
