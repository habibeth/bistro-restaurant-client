import Category from "../Category/Category";
import ContactBanner from "../ContactBanner/ContactBanner";
import OfferedItem from "../OfferdItems/OfferedItem";
import PopularItems from "../PopularItems/PopularItems";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <PopularItems></PopularItems>
            <ContactBanner></ContactBanner>
            <OfferedItem></OfferedItem>
        </div>
    );
};

export default Home;