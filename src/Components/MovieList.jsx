import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

export default function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [loded, setLoded] = useState(false);
  const elementImg = useRef();
  useEffect(() => {
    getMovieList();
    setLoded(true);
  }, []);

  const getMovieList = () => {
    GlobalApi.getVideosByGenere(props.GenreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const nextMovie = (ele) => {
    ele.scrollLeft += (window.innerWidth * 17) / 100 + 50;
  };
  const prevMovie = (ele) => {
    ele.scrollLeft -= (window.innerWidth * 17) / 100 + 50;
  };
  return (
    loded && (
      <div className="text-white">
         {props.index_ % 3 === 0  ? 
        <HiChevronLeft
          className="hidden md:block absolute mt-[9vh] left-0 text-[4vmin] ml-[1vmin] cursor-pointer"
          onClick={() => prevMovie(elementImg.current)}
        />:
        <HiChevronLeft
          className="hidden md:block absolute mt-[16vh] left-0 text-[4vmin] ml-[1vmin] cursor-pointer"
          onClick={() => prevMovie(elementImg.current)}
        />
        }
         {props.index_ % 3 === 0  ? 
        <HiChevronRight
          className="hidden md:block absolute mt-[9vh] right-0 text-[4vmin] mr-[1vmin] cursor-pointer"
          onClick={() => nextMovie(elementImg.current)}
        />:
        <HiChevronRight
          className="hidden md:block absolute mt-[16vh] right-0 text-[4vmin] mr-[1vmin] cursor-pointer"
          onClick={() => nextMovie(elementImg.current)}
        />
        }

        <div
          className="flex  w-full overflow-x-auto md:scrollbar-none scrollbar-hide md:scroll-smooth relative gap-6 p-5 pb-10"
          ref={elementImg}
        >
          {movieList.map((item, index) => (
            <>
              {props.index_ % 3 === 0  ? (
                <HrMovieCard key={index} movie={item} />
              ) : (
                <MovieCard key={index} movie={item} />
              )}
            </>
          ))}
        </div>
      </div>
    )
  );
}
