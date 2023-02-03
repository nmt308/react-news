import business from '../../assets/images/business.jpg';
import entertainment from '../../assets/images/entertainment.jpg';
import food from '../../assets/images/food.jpg';
import sports from '../../assets/images/sports.png';
import SlideItem from './SlideItem';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function HomeSlide() {
    return (
        <section className="news-testimonials" id="testimonials">
            <div className="testimonials pt-2 pb-5">
                <div className="container pb-lg-5">
                    <OwlCarousel
                        responsive={{
                            0: { items: 1, nav: false },
                            480: {
                                items: 1,
                                nav: false,
                            },
                            667: {
                                items: 1,
                                nav: true,
                            },
                            1000: {
                                items: 1,
                                nav: true,
                            },
                        }}
                        loop={true}
                        margin={0}
                        nav={false}
                        responsiveClass={true}
                        autoPlay={true}
                        autoplayTimeout={5000}
                        autoplaySpeed={1000}
                        autoplayHoverPause={false}
                        className="owl-theme mb-md-0 mb-sm-5 mb-4"
                    >
                        <SlideItem
                            name="Healthy"
                            title=" Create an Art that shows the Healthy in everyone’s ideas of flaws."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={food}
                        />
                        <SlideItem
                            name="Sports"
                            title=" A part of every culture past and present, but each culture has its own definition of sports."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={sports}
                        />
                        <SlideItem
                            name="Entertainment"
                            title=" Deals with information of the entertainment industry among others."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={entertainment}
                        />
                        <SlideItem
                            name="Business"
                            title=" To succeed in Life, you need 3 things : a wishbone, a backbone, a funny bone."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={business}
                        />
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}
