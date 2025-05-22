import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        setEpisodes(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching episodes:", err);
      });
  }, []);

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#14D9E6]">Episodes</h2>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView="auto"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="relative"
      >
        {episodes.map((ep) => (
          <SwiperSlide key={ep.id} style={{ width: "250px" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(7.5px)",
                WebkitBackdropFilter: "blur(7.5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderTop: "1px solid #00FFFF",
                borderBottom: "1px solid #9DFE00",
                borderLeft: "1px solid #00FFFF",
                borderRight: "1px solid #9DFE00",
                padding: "14px",
                clipPath:
                  "polygon(0 0, 100% 0, 100% 70%, 74% 99%, 0 99%, 0% 50%)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: "80px",
                overflow: "hidden",
              }}
            >
              <p className="font-semibold text-white mb-0 pt-0">{ep.episode}</p>
              <h3 className="text-sm font-semibold text-left leading-snug break-words mt-1">
                {ep.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="swiper-button-prev"
          style={{ color: "#84F729", left: "-10px" }}
        ></div>
        <div
          className="swiper-button-next"
          style={{ color: "#84F729", right: "-10px" }}
        ></div>
      </Swiper>
    </div>
  );
};

export default Episodes;
