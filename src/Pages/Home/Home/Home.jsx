import Category from "../Category/Category";
import ContactBanner from "../ContactBanner/ContactBanner";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import OfferedItem from "../OfferdItems/OfferedItem";
import PopularItems from "../PopularItems/PopularItems";
import ReviewsClients from "../ReviewsClients/ReviewsClients";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <PopularItems></PopularItems>
            <ContactBanner></ContactBanner>
            <OfferedItem></OfferedItem>
            <FeaturedBanner></FeaturedBanner>
            <ReviewsClients></ReviewsClients>
        </div>
    );
};

export default Home;