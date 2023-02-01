export default function ArticleItem() {
    return (
        <div className="col-lg-6 col-md-6 item">
            <div className="card">
                <div className="card-header p-0 position-relative">
                    <a href="#blog-single.html">
                        <img
                            className="card-img-bottom d-block radius-image-full"
                            src="assets/images/image1.jpg"
                            alt="Card"
                        />
                    </a>
                </div>
                <div className="card-body blog-details">
                    <span className="label-blue">Beauty</span>
                    <a href="#blog-single.html" className="blog-desc">
                        The 3 Eyeshadow palettes I own & How to downsize your stash
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Quis vitae sit.</p>
                    <div className="author align-items-center mt-3 mb-1">
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
