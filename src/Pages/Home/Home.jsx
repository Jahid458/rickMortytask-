import Banner from "../../Banner/Banner";
import Episodes from "../../Episodes/Episodes";
import Location from "../../Locations/Location";

const Home = () => {
  return (
    <div>
      <div className="bg-[#1E1E1E] py-4 flex justify-center items-center">
        <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
      </div>
      <Banner />
      <div className="bg-[#1E1E1E] relative overflow-hidden">
        <img
          src="/rick-side.png"
          alt="Rick Side"
          className="absolute top-10 right-0 h-[80%] max-w-[400px] opacity-10 object-contain z-0 pointer-events-none hidden md:block"
        />
        <div className="relative z-10 w-11/12 mx-auto">
          <Episodes />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Home;
