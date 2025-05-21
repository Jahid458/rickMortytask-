import React from "react";

const CastCard = ({ character }) => {
  return (
    <div
      className="min-w-[180px] max-w-[180px] cursor-pointer relative overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.21)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(7.5px)",
        WebkitBackdropFilter: "blur(7.5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "14px",
        clipPath: "polygon(100% 0, 100% 73%, 54% 100%, 0 100%, 0 0)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Character Image */}
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: "12px",
          objectFit: "cover",
          filter: "drop-shadow(0 0 5px rgba(0,0,0,0.3))",
        }}
      />

      {/* Name Section - Left Aligned */}
      <div
        className="text-sm font-semibold px-2 py-1 self-start"
        style={{
          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
        }}
      >
        {character.name}
      </div>
    </div>
  );
};

export default CastCard;
