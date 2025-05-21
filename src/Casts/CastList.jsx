import  { useEffect, useState } from 'react';
import axios from 'axios';
import CastCard from '../components/CastCard';


const CastList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results.slice(0, 10)); // show first 10 characters
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Meet The Cast</h2>
        <button className="text-sm text-lime-400 border border-lime-400 px-3 py-1 rounded-md hover:bg-lime-400 hover:text-black transition-all duration-200">
          View All
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {characters.map(character => (
          <CastCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
