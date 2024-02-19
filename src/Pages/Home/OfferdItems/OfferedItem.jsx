import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import useMenu from "../../../hook/useMenu";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import FoodCard from "../../Shared/FoodCard/FoodCard";


const OfferedItem = () => {
    const [menu] = useMenu();
    const offered = menu?.filter(item => item.category === "offered")
    // console.log(offered)
    return (
        <div className="max-w-6xl mx-auto my-20">
            <SharedTitle heading={"Should Try"} subHeading={"CHEF RECOMMENDS"}></SharedTitle>
            <div className="mt-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        offered?.map(item => <SwiperSlide key={item._id} className="">
                            <FoodCard key={item._id} item={item}></FoodCard>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default OfferedItem;