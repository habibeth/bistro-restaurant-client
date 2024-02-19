


const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="">
            <div className="bg-base-200 h-[500px]">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="px-5 py-3 bg-black text-white absolute right-5 top-5 font-bold">{price}</p>
                <div className="flex h-full">
                    <div className="px-5 py-10 text-center">
                        <h2 className="text-xl font-medium mb-5">{name}</h2>
                        <p className="text-center mb-5 flex grow-1">{recipe}</p>
                        <div className="">
                            <button className="uppercase px-5 py-2 border-b-4 text-[#BB8506] border-[#BB8506] hover:border-[#1f1f1e] hover:bg-[#1f1f1e] hover:text-[#BB8506] rounded-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;