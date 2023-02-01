export default function Header(): React.ReactElement {
    return (
        <header className="w3l-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
                    <a className="navbar-brand" href="index.html">
                        <span className="fa fa-newspaper-o"></span> NewsBlog
                    </a>

                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        <span className="fa icon-expand fa-bars"></span>
                        <span className="fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <nav className="mx-auto">
                            <div className="search-bar">
                                <form className="search">
                                    <input
                                        type="search"
                                        className="search__input"
                                        name="search"
                                        placeholder="Discover news, articles and more"
                                        required
                                    />
                                    <span className="fa fa-search search__icon"></span>
                                </form>
                            </div>
                        </nav>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown @@pages__active">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="google.com"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    More <span className="fa fa-angle-down"></span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item @@b__active" href="beauty.html">
                                        Beauty
                                    </a>
                                    <a className="dropdown-item @@fa__active" href="fashion.html">
                                        Fashion & Style
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item @@contact__active">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
    );
}
