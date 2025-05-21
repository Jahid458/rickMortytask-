import { useEffect, useState } from "react";
import axios from "axios";
import CastCard from "../components/CastCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const CastList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results); 
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <div className="p-4">
      {/* Title and View All Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Meet The Cast</h2>
        <Link to="/allcast">
          <button className="text-sm text-lime-400 border border-lime-400 px-3 py-1 rounded-md hover:bg-lime-400 hover:text-black transition-all duration-200">
            View All
          </button>
        </Link>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="relative"
      >
        {characters.map((character) => (
          <SwiperSlide key={character.id} style={{ width: "190px" }}>
            <CastCard character={character} />
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div
          className="swiper-button-prev"
          style={{
            color: "#84F729",
            left: "-10px",
          }}
        ></div>
        <div
          className="swiper-button-next"
          style={{
            color: "#84F729",
            right: "-10px",
          }}
        ></div>
      </Swiper>
    </div>
  );
};

export default CastList;
