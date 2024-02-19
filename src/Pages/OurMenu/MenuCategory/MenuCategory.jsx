import { Link } from "react-router-dom";
import CategoryBanner from "../../../components/CategoryBanner/CategoryBanner";
import ListItems from "../../Shared/ListItems/ListItems";


const MenuCategory = ({ headingText, subHeadingText, imageFile, items }) => {
    return (
        <div className="mb-20">
            <div className="mb-20">
                {headingText && <CategoryBanner heading={headingText} subHeading={subHeadingText} image={imageFile}></CategoryBanner>}
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                    {
                        items?.map(item => <ListItems key={item._id} item={item}></ListItems>)
                    }
                </div>
            </div>
            <div className="flex items-center mt-10 justify-center">
                <Link>
                    <button className='px-5 py-3 border-b-4 rounded-xl border-black'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;