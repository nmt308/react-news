import { Skeleton } from '@mui/material';
export default function SkeletonLoading() {
    return (
        <div className="col-lg-6 mt-4">
            <div className="bg-clr-white hover-box h-100">
                <div className="row h-100">
                    <div className="col-sm-5 position-relative">
                        <div className="image-mobile w-100 h-100 d-flex justify-content-center align-items-center">
                            <Skeleton
                                className="skeleton-avt"
                                variant="rectangular"
                                width="80%"
                                height="80%"
                                style={{ borderRadius: '14px', minHeight: '150px' }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-7 card-body blog-details align-self" style={{ paddingLeft: '0' }}>
                        <a href="#blog-single.html" className="blog-desc">
                            <Skeleton variant="rectangular" width="90%" height="16px" />
                            <Skeleton variant="rectangular" width="80%" height="16px" style={{ marginTop: '14px' }} />
                        </a>
                        <div className="author align-items-center">
                            <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                            <ul className="blog-meta" style={{ marginTop: '24px' }}>
                                <li>
                                    <Skeleton variant="rectangular" width="120px" height="16px" />
                                </li>
                                <li className="meta-item blog-lesson">
                                    <Skeleton
                                        variant="rectangular"
                                        width="210px"
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
