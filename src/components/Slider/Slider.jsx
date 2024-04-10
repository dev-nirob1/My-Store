import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex w-[300vw] h-[calc(100vh-80px)] overflow-hidden">
                {data.map((item, index) => <img src={item} key={index} className="w-[100vw] h-full  transition-all ease-in-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} alt="slider image" />)}
            </div>
            <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-3">
                <button className="h-8 w-12 flex items-center justify-center bg-white" onClick={prevSlide}>
                    <FaArrowLeft />
                </button>
                <button className="h-8 w-12 flex items-center justify-center bg-white" onClick={nextSlide}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;