import Banner from "../../Banner/Banner";
import Episodes from "../../Episodes/Episodes";
import Location from "../../Locations/Location";
const Home = () => {
  return (
    <div>

      <Banner/>
      <div className="bg-[#1E1E1E]">

        <Episodes/>
        <Location/>
      </div>
    </div>
  );
};

export default Home;
