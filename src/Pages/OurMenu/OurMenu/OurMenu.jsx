import CategoryBanner from "../../../components/CategoryBanner/CategoryBanner";



import menuImg from '../../../assets/menu/banner3.jpg'
import SharedTitle from "../../../components/SharedTitle/SharedTitle";
import useMenu from "../../../hook/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'


const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu?.filter(item => item.category === 'offered');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const pizza = menu?.filter(item => item.category === 'offered');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    return (
        <div>
            <CategoryBanner image={menuImg} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"}></CategoryBanner>
            <div className="my-10">
                <SharedTitle heading={"Don't miss"} subHeading={"TODAY'S OFFER"}></SharedTitle>
            </div>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory headingText={"dessert"} subHeadingText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} imageFile={dessertBg} items={dessert}></MenuCategory>


            <MenuCategory headingText={"pizza"} subHeadingText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} imageFile={pizzaBg} items={pizza}></MenuCategory>

            <MenuCategory headingText={"salad"} subHeadingText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} imageFile={saladBg} items={salad}></MenuCategory>

            <MenuCategory headingText={"soup"} subHeadingText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} imageFile={soupBg} items={soup}></MenuCategory>
        </div>
    );
};

export default OurMenu;