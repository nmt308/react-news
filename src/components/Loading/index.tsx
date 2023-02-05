import './Loading.scss';
import spinner from '../../assets/images/spinner.gif';
function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center preload" style={{ fontSize: '50px' }}>
            <span className="fa fa-newspaper-o" style={{ fontSize: '100px' }}></span> NewsBlog
            <img src={spinner} alt="loading" />
        </div>
    );
}
export default Loading;
