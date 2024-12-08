import {lazy} from "react";
import gymBackgroundImage from "../assets/realGymBackground.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="relative content">
        <div className="w-full mx-auto">
          <LazyLoadImage
            src={gymBackgroundImage}
            alt="GymBackgroundImage"
            effect="blur"
          />
          {/* Text overlay */}
          <div className="absolute w-full inset-0 flex flex-col items-center justify-start mt-6 sm:mt-40">
            <p
              style={{ textShadow: "2px 3px orange" }}
              className="text-pink-600 text-3xl sm:text-5xl text-center font-bold animate-fade-in"
            >
              Looking to improve your fitness
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-14 mt-6 sm:mt-20 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Main;
