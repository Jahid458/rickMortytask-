import RickIcon from "../../public/portal.png";
import BubbleImg from "../../public/bubble.png";
import BackgroundImage from "../../public/bg1.png";
import CastList from "../Casts/CastList";


const Banner = () => {
  return (
    <div className="relative bg-[#1E1E1E] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-4xl sm:text-6xl font-bold">
            {/* THE with Bubble */}
            <div className="relative flex items-center justify-start">
              <img
                src={BubbleImg}
                alt="Bubble"
                className="absolute -top-8 -left-10 w-40 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain opacity-90"
              />
              <span className="italic text-white">THE</span>
            </div>

            <img
              src={RickIcon}
              alt="Rick Icon"
              className="w-20 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
            />

            <span className="text-[#84F729]">RICK</span>
            <span className="text-[#84F729]">&</span>
            <span className="text-[#84F729]">MORTY</span>
            <span className="italic text-white">WIKI</span>
          </div>

          {/* Description */}
          <div className="flex md:flex-row flex-col-reverse gap-4 items-center">
            <button className="mt-6 bg-[#84F729] w-fit text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transition-all">
              ▶ Watch Now
            </button>
            <p className="mt-6 lg:max-w-xl text-sm sm:text-start text-[#84F729] text-left">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>

        {/* Cast List Section */}
        <div className="mt-10">
          <CastList />
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
