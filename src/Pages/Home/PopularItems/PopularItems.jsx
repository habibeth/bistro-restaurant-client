import CategoryBanner from '../../../components/CategoryBanner/CategoryBanner';
import popularBg from '../../../assets/home/chef-service.jpg'
import SharedTitle from '../../../components/SharedTitle/SharedTitle';
import useMenu from '../../../hook/useMenu';
import ListItems from '../../Shared/ListItems/ListItems';
import { Link } from 'react-router-dom';

const PopularItems = () => {
    const [menu] = useMenu();
    // console.log(menu)
    const popular = menu?.filter(item => item.category === 'popular');
    // console.log(popular)
    return (
        <div className='my-20'>
            <CategoryBanner image={popularBg} heading={"Bistro Boss"} subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}></CategoryBanner>
            <div className="max-w-6xl mx-auto">
                <div className="my-10">
                    <SharedTitle heading={"Check it out"} subHeading={"FROM OUR MENU"}></SharedTitle>
                </div>
                <div className="grid md:grid-cols-2 gap-7">
                    {
                        popular?.map(item => <ListItems key={item._id} item={item}></ListItems>)
                    }
                </div>
                <div className="flex items-center mt-10 justify-center">
                    <Link>
                        <button className='px-5 py-3 border-b-4 rounded-xl border-black'>View Full  Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularItems;