import { Skeleton } from '@mui/material';
export default function SkeletonLoading() {
    return (
        <div className="col-lg-6 mt-4">
            <div className="bg-clr-white hover-box">
                <div className="row">
                    <div className="col-sm-5 position-relative">
                        <div className="image-mobile w-100 h-100 d-flex justify-content-center align-items-center">
                            <Skeleton
                                variant="rectangular"
                                width="80%"
                                height="80%"
                                style={{ borderRadius: '14px', minHeight: '150px' }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-7 card-body blog-details align-self">
                        <a href="#blog-single.html" className="blog-desc">
                            <Skeleton variant="rectangular" width="90%" height="20%" />
                            <Skeleton variant="rectangular" width="80%" height="20%" style={{ marginTop: '14px' }} />
                        </a>
                        <div className="author align-items-center">
                            <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                            <ul className="blog-meta">
                                <li>
                                    <Skeleton variant="rectangular" width="120px" height="16px" />
                                </li>
                                <li className="meta-item blog-lesson">
                                    <Skeleton
                                        variant="rectangular"
                                        width="240px"
                                        height="16px"
                                        style={{ marginTop: '14px' }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
