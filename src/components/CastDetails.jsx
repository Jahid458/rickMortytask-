import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeNames, setEpisodeNames] = useState([]);

  useEffect(() => {
    // Fetch character details
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(async data => {
        setCharacter(data);

        // Fetch all episodes using Promise.all
        const episodeResponses = await Promise.all(
          data.episode.map(epUrl => fetch(epUrl).then(res => res.json()))
        );

        // Extract episode names
        const names = episodeResponses.map(ep => ep.name);
        setEpisodeNames(names);
      })
      .catch(err => console.error('Error:', err));
  }, [id]);

  if (!character) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-xl overflow-hidden border-4 border-teal-500">
            <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400">{character.name}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-teal-300 font-medium">Status</span><br />{character.status}
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-teal-300 font-medium">Species</span><br />{character.species}
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-teal-300 font-medium">Gender</span><br />{character.gender}
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2 md:col-span-1">
                <span className="text-teal-300 font-medium">Origin</span><br />{character.origin.name}
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2">
                <span className="text-teal-300 font-medium">Last Known Location</span><br />{character.location.name}
              </div>
            </div>
          </div>
        </div>

        {/* Episode List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-teal-300 mb-4">Episodes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-white/90">
            {episodeNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
