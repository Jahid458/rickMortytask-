import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-stretch gap-4 w-full max-w-5xl p-6">
        {/* Left: Character Image with Name Overlay */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img
            src={character.image}
            alt={character.name}
            className="rounded-xl w-60 h-60 object-cover"
          />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-teal-300 text-lg font-semibold rounded">
            {character.name}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] bg-[#9DFE00] h-[110px] mt-36 mr-20" />

        {/* Right: Info */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Removed h2 here since it's now above the image */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow">
              <span className="text-teal-300 font-medium">Status</span>
              <br />
              {character.status}
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow">
              <span className="text-teal-300 font-medium">Species</span>
              <br />
              {character.species}
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow">
              <span className="text-teal-300 font-medium">Gender</span>
              <br />
              {character.gender}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow">
              <span className="text-teal-300 font-medium">Origin</span>
              <br />
              {character.origin.name}
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow">
              <span className="text-teal-300 font-medium">Location</span>
              <br />
              {character.location.name}
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow max-h-40 overflow-y-auto">
            <span className="text-teal-300 font-medium block mb-2">
              Episodes
            </span>
            <ul className="list-disc list-inside space-y-1">
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
