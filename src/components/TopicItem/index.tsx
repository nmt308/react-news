import { Link } from 'react-router-dom';
import Ad from '../../assets/images/ad.jpg';
export default function TopicItem() {
    return (
        <>
            {' '}
            <div className="topics">
                <h3 className="section-title-left mb-4"> Topics</h3>
                <Link to="/category/health" className="topics-list">
                    <div className="list1">
                        <span className="fa fa-stethoscope"></span>
                        <h4>Healthy</h4>
                    </div>
                </Link>
                <Link to="/category/sports" className="topics-list mt-3">
                    <div className="list1">
                        <span className="fa fa-futbol"></span>
                        <h4>Sports</h4>
                    </div>
                </Link>
                <Link to="/category/entertainment" className="topics-list mt-3">
                    <div className="list1">
                        <span className="fa fa-photo-film"></span>
                        <h4>Entertainment</h4>
                    </div>
                </Link>
                <Link to="/category/business" className="topics-list mt-3">
                    <div className="list1">
                        <span className="fa fa-pie-chart"></span>
                        <h4>Business</h4>
                    </div>
                </Link>
            </div>
            <div className="sponsers mt-5">
                <h3 className="section-title-left mb-4"> Our sponsers</h3>
                <a>
                    <img src={Ad} alt="" className="img-fluid radius-image-full" />
                </a>
                <a className="text-center d-block text-uppercase">Advertise with us </a>
            </div>
        </>
    );
}
