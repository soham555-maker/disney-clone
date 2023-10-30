import React from "react";

export default function MovieCard(props) {
  const IMG_BASE_URL = "http://image.tmdb.org/t/p/original";

  return (
    <img
      src={IMG_BASE_URL + props.movie.poster_path}
      alt="..."
      className="w-[41vw] md:w-[12vw] rounded-md object-cover border-[0px] hover:border-[3px] border-gray-400  hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out shadow-xl shadow-gray-800"
    />
  );
}
