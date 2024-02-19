

const SharedTitle = ({heading, subHeading}) => {
    return (
        <div className="w-2/6 mx-auto text-center">
            <p className="text-lg mb-4 text-orange-500 italic">---{heading}---</p>
            <h2 className="text-4xl border-t-2 border-b-2 py-5 text-center">{subHeading}</h2>
        </div>
    );
};

export default SharedTitle;