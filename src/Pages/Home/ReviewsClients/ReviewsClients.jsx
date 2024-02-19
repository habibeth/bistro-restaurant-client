import SharedTitle from "../../../components/SharedTitle/SharedTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const ReviewsClients = () => {
    const axiosPublic = useAxiosPublic();
    const {data: reviews = []} = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const result = await axiosPublic.get('/reviews');
            return result.data;
        }
    })
    return (
        <div className="max-w-6xl mx-auto my-20">
            <SharedTitle heading={"What Our Clients Say"} subHeading={"TESTIMONIALS"}></SharedTitle>
            <div className="mt-10">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    

                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center px-20">
                                <div className="">
                                    <Rating
                                        style={{ maxWidth: 200 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className="text-9xl text-center mt-16 mb-7">
                                    <FaQuoteLeft />
                                </div>
                                <p className="text-center">{review.details}</p>
                                <h2 className="text-orange-600 text-xl font-bold mt-3">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default ReviewsClients;