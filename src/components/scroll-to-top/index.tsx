'use client';
import { useEffect, useState } from 'react';
import Icon from '../icon';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          title="scroll"
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-999 h-10 w-10 items-center justify-center rounded-[4px] bg-blue_light-500 shadow-lg duration-200 ease-out hover:bg-blue_light-600 ${
            isVisible ? 'flex' : 'hidden'
          }`}
        >
          <Icon
            icon="chevronUp"
            className="h-5 w-5 fill-common-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          />
        </button>
      )}
    </>
  );
}
