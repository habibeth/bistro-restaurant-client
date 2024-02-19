

const ListItems = ({ item }) => {
    // console.log(item)
    const { name, image, recipe, price } = item;
    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={image} className="w-32" alt="" style={{ borderRadius: '0px 200px 200px 200px' }} />
                    <div className="ml-5">
                        <h2 className="text-2xl">{name}</h2>
                        <p className="text-base">{recipe}</p>
                    </div>
                </div>
                <p className="text-base text-orange-600 font-bold">{price}</p>
            </div>
        </div>
    );
};

export default ListItems;