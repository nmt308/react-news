export default function ArticleWithBg() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="top-pic1">
                <div className="card-body blog-details">
                    <a href="#blog-single.html" className="blog-desc">
                        Fashion is Creating your Beauty image. The New fashion starts here
                    </a>
                    <div className="author align-items-center">
                        <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                        <ul className="blog-meta">
                            <li>
                                <a href="author.html">Isabella ava</a>
                            </li>
                            <li className="meta-item blog-lesson">
                                <span className="meta-value"> July 13, 2020 </span>.{' '}
                                <span className="meta-value ml-2">
                                    <span className="fa fa-clock-o"></span> 1 min
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
