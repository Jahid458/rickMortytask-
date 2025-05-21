import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-6">
      <div className="flex flex-col md:flex-row items-stretch gap-6 w-full max-w-5xl p-4 sm:p-6">
        {/* Left: Character Image with Name on top */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative md:mt-8">
          {/* Name above image for all devices */}
          <div className="text-teal-300 text-lg font-semibold mb-2 text-center">
            {character.name}
          </div>

          <img
            src={character.image}
            alt={character.name}
            className="rounded-xl w-48 h-48 sm:w-60 sm:h-60 object-cover"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] bg-[#9DFE00] h-[110px] self-center mx-6" />

        {/* Right: Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Status", "Species", "Gender"].map((title) => {
              const value = character[title.toLowerCase()];
              return (
                <div
                  key={title}
                  className="bg-white/5 p-4 rounded-xl border border-white/10 shadow"
                >
                  <span className="text-white font-medium">{title}</span>
                  <br />
                  {value}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow">
              <span className="text-white font-medium">Origin</span>
              <br />
              {character.origin.name}
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow">
              <span className="text-white font-medium">Location</span>
              <br />
              {character.location.name}
            </div>
          </div>

          {/* Episodes with green scrollbar */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#9DFE00] scrollbar-track-gray-700">
            <span className="text-white font-medium block mb-3">Episodes</span>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
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
