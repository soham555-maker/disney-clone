import React from "react";
import GenresList from "../../Constants/GenresList";
import MovieList from "./MovieList";

export default function RenderGeneraList() {
  return (
    <div>
      {GenresList.movieGenres.map(
        (item, index) =>
          index < 5 && (
            <div key={index} className="sm:px-8 md:px-16">
              <div className=" ml-0 md:ml-8 text-[20px] text-white font-bold mt-0 md:my-12">
                {item.name}
                <MovieList GenreId={item.id} index_={index} />
              </div>
              
            </div>
          )
      )}
    </div>
  );
}
