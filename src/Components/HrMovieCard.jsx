import React from "react";

export default function HrMovieCard(props) {
  const IMG_BASE_URL = "http://image.tmdb.org/t/p/original";
  return (
    <section className="hover:scale-110 transition-all duration-300 ease-in-out">
    <img
      src={IMG_BASE_URL + props.movie.backdrop_path}
      alt="..."
      className="w-[41vw] md:w-[15vw] rounded-md object-cover border-[0px] hover:border-[3px] border-gray-400 cursor-pointer transition-all duration-300 ease-in-out shadow-xl shadow-gray-800"
    />
    <p className="w-[41vw] md:w-[15vw] text-[12px] md:text-[18px] text-white ">{props.movie.title}</p>
    </section>
  );
}
