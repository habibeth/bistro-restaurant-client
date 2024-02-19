import { Parallax } from 'react-parallax';
import featuredBannerBg from '../../../assets/home/featured.jpg'
import SharedTitle from '../../../components/SharedTitle/SharedTitle';

const FeaturedBanner = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={featuredBannerBg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="bg-black bg-opacity-40">
                <div className="text-white py-20">
                    <SharedTitle heading={"Check it out"} subHeading={"FROM OUR MENU"}></SharedTitle>
                </div>
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center pb-20">
                    <img src={featuredBannerBg} alt="" className='h-[300px] w-full' />
                    <div className="text-white">
                        <h2 className='text-xl font-medium my-2'>March 20, 2023</h2>
                        <h2 className='text-xl font-medium my-2'>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className="mt-5">
                            <button className="uppercase px-5 py-2 border-b-4 text-white border-white rounded-lg">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default FeaturedBanner;