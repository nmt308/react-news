import Footer from './footer';
import Header from './header';
import classNames from 'classnames/bind';

interface children {
    children: React.ReactNode;
}
function DefaultLayout({ children }: children) {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
