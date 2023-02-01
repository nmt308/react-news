import Beauty from '../../assets/images/beauty.jpg';
import Fashion from '../../assets/images/fashion.jpg';
import Food from '../../assets/images/food.jpg';
import LifeStyle from '../../assets/images/lifestyle.jpg';
import SlideItem from './SlideItem';
export default function HomeSlide() {
    return (
        <section className="w3l-testimonials" id="testimonials">
            <div className="testimonials pt-2 pb-5">
                <div className="container pb-lg-5">
                    <div className="owl-testimonial owl-carousel owl-theme mb-md-0 mb-sm-5 mb-4">
                        <SlideItem
                            name="Beauty"
                            title=" Create an Art that shows the beauty in everyone’s ideas of flaws."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={Beauty}
                        />
                        <SlideItem
                            name="Fashion and Style"
                            title=" Addicted to Fashion is the Armor to survive the reality of Everyday Life."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={Fashion}
                        />
                        <SlideItem
                            name="Food and Wellness"
                            title=" Create healthy habits, not restrictions. Wellness is a taste of being."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={Food}
                        />
                        <SlideItem
                            name="Lifestyle"
                            title=" To succeed in Life, you need 3 things : a wishbone, a backbone, a funny bone."
                            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium
                                        officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam
                                        tenetur. Ut fermentum leo quis sapienet faucibus, at scelerisque sem feugiat.
                                        Nulla in eros purus."
                            image={LifeStyle}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
