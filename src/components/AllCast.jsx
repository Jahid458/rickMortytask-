import { useEffect, useState } from "react";
import axios from "axios";
import CastCard from "./CastCard";
import { Link } from "react-router-dom";
import BackgroundImage from "../../public/image 64-13.png";

const AllCast = () => {
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
    <div className="relative bg-[#1E1E1E] min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 py-6 flex justify-center items-center">
        <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      <div className="relative z-10 w-11/12 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#14D9E6]">The Cast</h2>
        <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {characters.map((character) => (
            <Link
              to={`/cast/${character.id}`}
              key={character.id}
              className="flex justify-center items-center"
            >
              <CastCard character={character} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCast;
