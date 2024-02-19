import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <div className="grid md:grid-cols-2 text-white">
                <div className="bg-[#1F2937]">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col justify-end text-center py-20">
                            <h2 className="text-2xl font-bold mb-5">CONTACT US</h2>
                            <p>123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789</p>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827]">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col items-center py-20">
                            <h2 className="text-3xl font-bold">Follow US</h2>
                            <p className="text-xl my-5">Join us on social media</p>
                            <div className="text-white text-5xl flex gap-5">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Ahsan Habib</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;