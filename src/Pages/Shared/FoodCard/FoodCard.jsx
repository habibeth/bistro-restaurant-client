import { SwiperSlide } from "swiper/react";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="card rounded-none bg-base-200">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="px-5 py-3 bg-black text-white absolute right-5 top-5 font-bold">{price}</p>
            <div className="flex flex-col items-center px-5 py-10">
                <h2 className="card-title mb-5">{name}</h2>
                <p className="text-center mb-5">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;