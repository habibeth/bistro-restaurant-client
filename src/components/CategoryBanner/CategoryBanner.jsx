import { Parallax } from 'react-parallax';


const CategoryBanner = ({heading, subHeading, image}) => {
    return (
        <div className=''>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                bgImageAlt="the dog"
                strength={-200}
            >
            <div className="bg-black my-20 mx-20 p-20 text-center text-white bg-opacity-60">
                <h2 className='text-4xl font-bold mb-5 uppercase'>{heading}</h2>
                <p className='text-lg'>{subHeading}</p>
            </div>
            </Parallax>
        </div>
    );
};

export default CategoryBanner;