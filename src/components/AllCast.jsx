import { useEffect, useState } from "react";
import axios from "axios";
import CastCard from "./CastCard";
import { Link } from "react-router-dom";


const AllCast = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results); // show all characters from first page
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <div className="p-10 bg-[#1E1E1E] min-h-screen">
      <h2 className="text-2xl font-bold text-white mb-6">Meet The Cast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        {characters.map((character) => (
        <Link to={`/cast/${character.id}`} key={character.id}>
          <CastCard key={character.id} character={character} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCast;
