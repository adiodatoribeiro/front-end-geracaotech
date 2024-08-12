import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Gallery({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const resetTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      rightSlide();
    }, 10000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    resetTimeout();
  }, [currentIndex]);

  const leftSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const rightSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    
      <div className="">
            <div className='flex bg-light-gray-3'>
            <div className="absolute group pl-6 pt-24 ">
                <h6 className="py-6 text-warning text-1xl font-bold">Melhores ofertas personalizadas</h6>
                <h1 className="font-bold text-5xl pb-6">Queima de <br/> estoque Nike 🔥</h1>
                <p className="pb-6">Consequat culpa exercitation mollit nisi excepteur do <br/> do tempor laboris eiusmod irure consectetur.</p>
                <button className="font-semibold text-white bg-primary rounded-md px-10 py-2 hover:bg-black">Ver ofertas</button>
            </div>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                className='ml-96 w-[850px] h-[610px] bg-light-gray-3 bg-cover duration-500'>
            </div>
            </div>
            
            <div 
                className='hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft 
                onClick={leftSlide} 
                size={30} />
            </div>

            <div 
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight 
                onClick={rightSlide} 
                size={30} />
            </div>

            <div 
              className='flex top-4 justify-center py-2'>
              {slides.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer transition duration-300 ease-in-out'>
                    <RxDotFilled
                    size={34}
                    className={
                      currentIndex === slideIndex
                        ? 'text-primary transition-colors duration-300 ease-in-out'
                        : 'text-light-gray-2 transition-colors duration-300 ease-in-out'
                    }/>
                </div>
              ))}
            </div>
      </div>
  );
}