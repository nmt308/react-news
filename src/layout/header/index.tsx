import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigateSearch } from '../../CustomHook';
import classNames from 'classnames';
export default function Header(): React.ReactElement {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigateSearch();
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleSearch = () => {
        navigate('/search', { q: value, page: 1 });
    };
    return (
        <header className="w3l-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
                    <Link to="/" className="navbar-brand">
                        <span className="fa fa-newspaper-o"></span> NewsBlog
                    </Link>

                    <button
                        className={classNames('navbar-toggler collapsed')}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <span className="fa icon-expand fa-bars"></span>
                        <span className="fa icon-close fa-times"></span>
                    </button>

                    <div
                        className={classNames('collapse navbar-collapse', {
                            show: open,
                        })}
                        id="navbarSupportedContent"
                    >
                        <nav className="mx-auto">
                            <div className="search-bar">
                                <div className="search">
                                    <input
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSearch();
                                            }
                                        }}
                                        value={value}
                                        onChange={handleValue}
                                        type="search"
                                        className="search__input"
                                        name="search"
                                        placeholder="Discover news, articles and more"
                                        required
                                    />
                                    <span className="fa fa-search search__icon" onClick={handleSearch}></span>
                                </div>
                            </div>
                        </nav>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown @@pages__active">
                                <div
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    About us
                                </div>
                            </li>
                            <li className="nav-item @@contact__active">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
