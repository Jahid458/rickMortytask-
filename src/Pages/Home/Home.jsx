import Banner from "../../Banner/Banner";
import Episodes from "../../Episodes/Episodes";
import Location from "../../Locations/Location";

const Home = () => {
  return (
    <div>
      {/* Logo Centered */}
      <div className="bg-[#1E1E1E] py-4 flex justify-center items-center">
        <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      <Banner />

      {/* Background Container */}
      <div className="bg-[#1E1E1E] relative overflow-hidden">
        {/* Right-side background image */}
        <img
          src="/rick-side.png"
          alt="Rick Side"
          className="absolute top-10 right-0 h-[80%] max-w-[400px] opacity-10 object-contain z-0 pointer-events-none hidden md:block"
        />

        {/* Content above image */}
        <div className="relative z-10">
          <Episodes />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Home;
