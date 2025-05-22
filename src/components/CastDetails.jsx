import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import bgImage from "../../public/bg2.png";
import { BiHeart } from "react-icons/bi";
import { GiAlienStare, GiHumanTarget } from "react-icons/gi";
import { FaGenderless } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaEarthAfrica } from "react-icons/fa6";
import { RiPlayList2Line } from "react-icons/ri";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);

      const episodeUrls = data.episode;
      const episodeData = await Promise.all(
        episodeUrls.map((url) => fetch(url).then((res) => res.json()))
      );
      setEpisodes(episodeData);
    };

    fetchData();
  }, [id]);

  if (!character) return <LoadingSpinner />;

  const genderIcon =
    character.gender === "Male" ? (
      <BsGenderMale className="text-[#9DFE00] text-2xl mb-1" />
    ) : character.gender === "Female" ? (
      <BsGenderFemale className="text-[#9DFE00] text-2xl mb-1" />
    ) : (
      <FaGenderless className="text-[#9DFE00] text-2xl mb-1" />
    );

  const icons = {
    Status: <BiHeart className="text-[#9DFE00] text-2xl mb-1" />,
    Species: <GiHumanTarget className="text-[#9DFE00] text-2xl mb-1" />,
    Gender: genderIcon,
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden pb-10">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 py-6 flex justify-center items-center">
        <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 w-full max-w-5xl mx-auto p-4 sm:p-6">
        <div className="w-full md:w-1/2 flex flex-col md:items-center md:justify-center items-center justify-center">
          <div className="text-teal-300 text-lg font-semibold mb-2 text-center">
            {character.name}
          </div>
          <img
            src={character.image}
            alt={character.name}
            className="rounded-xl w-48 h-48 sm:w-60 sm:h-60 object-cover bg-white/5 p-4 border border-[#9DFE00]/10 shadow-sm"
            style={{
              borderTop: "1px solid #00FFFF",
              borderBottom: "1px solid #9DFE00",
              borderLeft: "1px solid #00FFFF",
              borderRight: "1px solid #9DFE00",
            }}
          />
        </div>

        <div className="hidden md:block w-[2px] bg-[#9DFE00] h-[110px] self-center mx-6" />

        <div className="w-full md:w-1/2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Status", "Species", "Gender"].map((title) => {
              const value = character[title.toLowerCase()];
              return (
                <div
                  key={title}
                  className="bg-white/5 p-4 rounded-xl border border-white/10 shadow flex flex-col items-start"
                  style={{
                    borderTop: "1px solid #00FFFF",
                    borderBottom: "1px solid #9DFE00",
                    borderLeft: "1px solid #00FFFF",
                    borderRight: "1px solid #9DFE00",
                  }}
                >
                  {icons[title]}
                  <span className="text-white font-medium mb-1">{title}</span>
                  <div className="text-left">{value}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div
              className="bg-white/5 p-4 rounded-xl border border-white/10 shadow flex flex-col items-start"
              style={{
                borderTop: "1px solid #00FFFF",
                borderBottom: "1px solid #9DFE00",
                borderLeft: "1px solid #00FFFF",
                borderRight: "1px solid #9DFE00",
              }}
            >
              <FaEarthAfrica className="text-[#9DFE00] text-2xl mb-1" />
              <span className="text-white font-medium mb-1">Origin</span>
              <div className="text-left">{character.origin.name}</div>
            </div>
            <div
              className="bg-white/5 p-4 rounded-xl border border-white/10 shadow flex flex-col items-start"
              style={{
                borderTop: "1px solid #00FFFF",
                borderBottom: "1px solid #9DFE00",
                borderLeft: "1px solid #00FFFF",
                borderRight: "1px solid #9DFE00",
              }}
            >
              <IoLocationOutline className="text-[#9DFE00] text-2xl mb-1" />
              <span className="text-white font-medium mb-1">Location</span>
              <div className="text-left">{character.location.name}</div>
            </div>
          </div>

          <div
            className="bg-white/5 p-4 rounded-xl border border-white/10 shadow max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#9DFE00] scrollbar-track-gray-700"
            style={{
              borderTop: "1px solid #00FFFF",
              borderBottom: "1px solid #9DFE00",
              borderLeft: "1px solid #00FFFF",
              borderRight: "1px solid #9DFE00",
            }}
          >
            <RiPlayList2Line className="text-[#9DFE00] text-2xl mb-1" />
            <span className="text-white font-medium block mb-3">Episodes</span>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-left">
              {episodes.map((ep) => (
                <li key={ep.id}>{ep.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
