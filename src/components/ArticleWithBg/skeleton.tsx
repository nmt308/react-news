import WhiteBg from '../../assets/images/Solid_white.png';
import { Skeleton } from '@mui/material';
export default function SkeletonLoading() {
    return (
        <div className="col-lg-4 col-md-6 mt-4">
            <div className="top-pic1 articleWithBg-skeleton">
                <div className="card-body blog-details" style={{ padding: '0 1.25rem' }}>
                    <a className="blog-desc news-title">
                        <Skeleton />
                    </a>
                    <div className="author align-items-center">
                        <Skeleton className="img-fluid rounded-circle" style={{ height: '100px' }} />

                        <ul className="blog-meta">
                            <li>
                                <Skeleton />
                            </li>
                            <li className="meta-item blog-lesson">
                                <Skeleton width="70%" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
