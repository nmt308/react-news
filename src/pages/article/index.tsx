import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../utils/request';
interface Article {
    author: string;
    urlToImage: string;
    title: string;
    description: string;
    content: string;
    source: { name: string };
    publishedAt: string;
}
export default function ArticleDetail() {
    const { article } = useParams();
    const [detail, setDetail] = useState<Article>();
    useLayoutEffect(() => {
        request
            .get(`/everything`, {
                params: {
                    apiKey: 'f8e327afaffa440a8b386b8fa9b158f2',
                    q: article,
                    pageSize: '1',
                    language: 'en',
                },
            })
            .then((res) => {
                setDetail(res.data.articles[0]);
            });
    }, []);
    return (
        <section className="text-11 py-5">
            <div className="text11 py-lg-5 py-md-4">
                <div className="container">
                    <div className="blog-title px-md-5">
                        <h3 className="title-big">{detail?.title}</h3>
                        <ul className="blog-list">
                            <li>
                                <p>
                                    {' '}
                                    Posted on <strong>{detail?.publishedAt}</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    {' '}
                                    By{' '}
                                    <a href="#author">
                                        <strong>{detail?.author}</strong>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    {' '}
                                    Published in{' '}
                                    <a href="#category">
                                        <strong>Fashion</strong>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    {' '}
                                    <a href="#category">
                                        <strong>1 min read</strong>
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image mb-sm-5 mb-4 text-center">
                    <img src={detail?.urlToImage} alt="" className="img-fluid radius-image-full" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="text11-content">
                                <h4 className="mt-sm-3">
                                    {' '}
                                    How to create an Art that shows the beauty in everyone’s ideas of flaws.
                                </h4>
                                <p className="mt-4 mb-3">{detail?.description}</p>
                                <p className="mb-3">{detail?.content}</p>
                                <h5 className="quote">
                                    For dull and lifeless skin, mix apple juice with honey. Apply a thin layer to your
                                    face, and leave it for 5 minutes.
                                    <footer className="blockquote-footer mt-3"> Kelvin edison </footer>
                                </h5>

                                <p className="mb-3">
                                    Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
                                    elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..
                                </p>
                                <div className="sing-post-thumb mb-lg-5 mb-4 row pt-3">
                                    <div className="col-md-6">
                                        <a href="#url">
                                            <img src="assets/images/fashion1.jpg" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-3 align-self">
                                        <p className="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                                            tempora quisquam incidunt accusantium culpa voluptatibus, nulla qui a
                                            quibusdam porro? luctus justo. ac purus semper. Fusce faucibus ante vitae
                                            justo efficitur elementum. Donec ipsum.
                                        </p>
                                    </div>
                                </div>
                                <h4 className="mb-md-4 mb-3">Fusce faucibus ante vitae justo efficitur</h4>
                                <p className="mb-4">
                                    Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
                                    elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu Donec ipsum faucibus arcu
                                    elementum, luctus justo. ac purus semper.{' '}
                                </p>
                                <div className="text-list mb-4">
                                    <ol>
                                        <li>Quisque sagittis lacus eu lorem sodalesd enean adipiscing.</li>
                                        <li>Donec ipsum faucibus arcu elementum, luctus justo.</li>
                                        <li>Nam libero tempore, cum soluta nobis est eligendi optio </li>
                                        <li>Sed ut perspiciatis unde omnis natus</li>
                                    </ol>
                                </div>
                                <h4 className="mb-md-4 mb-3">Quisque sagittis lacus eu lorem sodales </h4>
                                <p className="mb-3">
                                    Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
                                    elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu.
                                </p>
                                <p className="mb-3">
                                    Fusce faucibus arcu faucibus ante vitae justo efficitur elementum. Donec ipsum
                                    faucibus. Donec ipsum faucibus arcu.
                                </p>

                                <div className="social-share-blog mt-5">
                                    <ul className="column3 tags m-0 p-0">
                                        <li>
                                            <p className="m-0 mr-sm-4 mr-2">Tags :</p>
                                        </li>
                                        <li>
                                            <a href="#url" className="btn-small">
                                                Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#url" className="btn-small">
                                                Beauty
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="column3 social m-0 p-0">
                                        <li>
                                            <p className="m-0 mr-sm-4 mr-2">Share this post :</p>
                                        </li>
                                        <li>
                                            <a href="#facebook" className="facebook">
                                                <span className="fa fa-facebook-square"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#twitter" className="twitter">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#linkedin" className="linkedin">
                                                <span className="fa fa-linkedin"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#envelope" className="mail">
                                                <span className="fa fa-envelope"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="new-posts clearfix">
                                    <a className="prev-post pull-left" href="#prev">
                                        <span className="fa fa-arrow-left" aria-hidden="true"></span>
                                        Previous Post
                                    </a>
                                    <a className="next-post pull-right" href="#next">
                                        Next Post <span className="fa fa-arrow-right" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
                            <aside className="sidebar">
                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="author">
                                        <div className="sidebar-title">
                                            <h4>About author</h4>
                                        </div>
                                        <div className="author-detalis">
                                            <a href="#author" className="author-image">
                                                <img
                                                    src="assets/images/a2.jpg"
                                                    alt="author image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="author-info">
                                                <a href="#author-name" className="author-name">
                                                    Isabella
                                                </a>
                                                <a href="#follow" className="btn btn-outline-primary">
                                                    Follow{' '}
                                                </a>
                                            </div>
                                        </div>
                                        <p className="mt-2">I am a Fashion designer, Makeup artist, and Blog writer.</p>
                                    </div>
                                </div>

                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="sidebar-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul className="blog-cat">
                                        <li>
                                            <a href="#url">Beauty </a>
                                        </li>
                                        <li>
                                            <a href="#url">Fashion and Style</a>
                                        </li>
                                        <li>
                                            <a href="#url">Food and wellness</a>
                                        </li>
                                        <li>
                                            <a href="#url">Lifestyle</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title">
                                        <h4>Recent Posts</h4>
                                    </div>

                                    <article className="post">
                                        <figure className="post-thumb">
                                            <img src="assets/images/beauty8.jpg" alt="" />
                                        </figure>
                                        <div className="text">
                                            <a href="blog-single.html">4 Ways to feel Great during the Cold Weather</a>
                                        </div>
                                        <div className="post-info">June 14, 2020</div>
                                    </article>

                                    <article className="post">
                                        <figure className="post-thumb">
                                            <img src="assets/images/food3.jpg" alt="" />
                                        </figure>
                                        <div className="text">
                                            <a href="blog-single.html">
                                                How to Make the Best Japanese Shokupan Veg Bread
                                            </a>
                                        </div>
                                        <div className="post-info">June 13, 2020</div>
                                    </article>

                                    <article className="post">
                                        <figure className="post-thumb">
                                            <img src="assets/images/beauty2.jpg" alt="" />
                                        </figure>
                                        <div className="text">
                                            <a href="blog-single.html">
                                                How to get Beautiful coloring Highlights this weak
                                            </a>
                                        </div>
                                        <div className="post-info">June 12, 2020</div>
                                    </article>
                                </div>

                                <div className="sidebar-sticky">
                                    <div className="sidebar-sticky-fix">
                                        <div className="sidebar-widget sidebar-blog-category archive">
                                            <div className="sidebar-title">
                                                <h4>Twitter feed</h4>
                                            </div>
                                            <ul className="blog-cat twitter-feed">
                                                <li>
                                                    <a href="#url">
                                                        {' '}
                                                        Creating an Art that shows the beauty in everyone’s ideas of
                                                        flaws. . #beauty #style #art #creative…
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#url">
                                                        See our lifestyle and beauty posts on twitter. #LifeStyle
                                                        #Beauty
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="comments">
                                <h3 className="aside-title ">Recent comments(2)</h3>
                                <div className="comments-grids">
                                    <div className="media-grid">
                                        <div className="media">
                                            <a className="comment-img" href="#url">
                                                <img
                                                    src="assets/images/a1.jpg"
                                                    className="img-responsive"
                                                    width="100px"
                                                    alt="placeholder image"
                                                />
                                            </a>
                                            <div className="media-body comments-grid-right">
                                                <h5>Jack Harry</h5>
                                                <ul className="p-0 comment">
                                                    <li className="">July 15th, 2020 at 11:00 am</li>
                                                    <li>
                                                        <a href="#comment" className="text-primary">
                                                            Reply
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec
                                                    purus quis tempor. Phasellus ipsum eu nec purus quis tempor dolor
                                                    set.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-grid">
                                        <div className="media">
                                            <a className="comment-img" href="#url">
                                                <img
                                                    src="assets/images/a2.jpg"
                                                    className="img-responsive"
                                                    width="100px"
                                                    alt="placeholder image"
                                                />
                                            </a>
                                            <div className="media-body comments-grid-right">
                                                <h5>Charlie</h5>
                                                <ul className="p-0 comment">
                                                    <li className="">July 15th, 2020 at 05:45 pm </li>
                                                    <li>
                                                        <a href="#comment" className="text-primary">
                                                            Reply
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec
                                                    purus quis tempor. Phasellus eu nec purus quis tempor.
                                                </p>
                                                <div className="media mt-4 mb-0 border-0 px-0 pb-0">
                                                    <a className="comment-img" href="#url">
                                                        <img
                                                            src="assets/images/a3.jpg"
                                                            className="img-responsive"
                                                            width="100px"
                                                            alt="placeholder image"
                                                        />
                                                    </a>
                                                    <div className="media-body comments-grid-right">
                                                        <h5>Jack Harry</h5>
                                                        <ul className="p-0 comment">
                                                            <li className="">July 15th, 2020 at 11:00 am</li>
                                                            <li>
                                                                <a href="#comment" className="text-primary">
                                                                    Reply
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Mattis ut hendrerit non, facilisis eget mauris. Sed
                                                            ultricies nec purus quis tempor. dolor set.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="leave-comment-form" id="comment">
                                <h3 className="aside-title">Leave a reply</h3>
                                <form action="#" method="post">
                                    <div className="input-grids">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="Email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="Comment"
                                                className="form-control"
                                                placeholder="Your Comment"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit text-right">
                                        <button className="btn btn-style btn-primary">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
