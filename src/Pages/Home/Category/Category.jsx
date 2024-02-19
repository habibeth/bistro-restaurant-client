import SharedTitle from "../../../components/SharedTitle/SharedTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import category1 from '../../../assets/home/slide1.jpg'
import category2 from '../../../assets/home/slide2.jpg'
import category3 from '../../../assets/home/slide3.jpg'
import category4 from '../../../assets/home/slide4.jpg'
import category5 from '../../../assets/home/slide5.jpg'
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <SharedTitle heading={"From 11:00am to 10:00pm"} subHeading={"ORDER ONLINE"}></SharedTitle>
            <div className="mt-10">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="mb-20">
                        <Link to="">
                            <img src={category1} alt="" className="w-full" />
                            <h2 className="text-4xl font-normal text-white -mt-20 text-center uppercase">Salads</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <Link to="">
                            <img src={category2} alt="" className="w-full" />
                            <h2 className="text-4xl font-normal text-white -mt-20 text-center uppercase">Soups</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <Link to="">
                            <img src={category3} alt="" className="w-full" />
                            <h2 className="text-4xl font-normal text-white -mt-20 text-center uppercase">Pizzas</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <Link to="">
                            <img src={category4} alt="" className="w-full" />
                            <h2 className="text-4xl font-normal text-white -mt-20 text-center uppercase">Desserts</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <Link to="">
                            <img src={category5} alt="" className="w-full" />
                            <h2 className="text-4xl font-normal text-white -mt-20 text-center uppercase">Drinks</h2>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;