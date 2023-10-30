import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function SliderBar() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const elementImg = useRef();
  const eleContainer = useRef();
//   const [loded, setLoded] = useState(false);
//   const [index, setIndex] = useState(0);
  useEffect(() => {
    getTrendingVideos();
  }, []);
  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      // console.log(resp.data.results);
      setTrendingMovies(resp.data.results);
    //   setLoded(true);
    });
  };
//   const nextMovie = () => {
//     setIndex(index === 19 ? 0 : index + 1);
//   };
//   const prevMovie = () => {
//     setIndex(index === 0 ? 19 : index - 1);
//   };
  const IMG_BASE_URL = "http://image.tmdb.org/t/p/original";
  const nextMovie = (ele) => {
    ele.scrollLeft += window.innerWidth -110;
  };
  const prevMovie = (ele) => {
    ele.scrollLeft -= window.innerWidth -110;
  };
  return (
    <div className="text-white">
        <HiChevronLeft className="hidden md:block absolute mt-[20vh] text-[5vmin] ml-[1vmin] cursor-pointer" onClick={()=> prevMovie(elementImg.current)}/>
        <HiChevronRight className="hidden md:block absolute mt-[20vh] right-0 text-[5vmin] mr-[1vmin] cursor-pointer" onClick={()=> nextMovie(elementImg.current)}/>
      {/* <p>{IMG_BASE_URL + trendingMovies[0]}</p> */}
      {/* {trendingMovies.map((item, index)=>(
        <img src={IMG_BASE_URL + item.backdrop_path} alt="..." />
      ))} */}

      <div className="flex  w-full p-8 md:px-16 py-4 md:scrollbar-none scrollbar-hide overflow-x-auto md:scroll-smooth" ref={elementImg}>

        {trendingMovies.map((item, index) => (
            <img
            key={index}
            src={IMG_BASE_URL + item.backdrop_path}
            alt="..."
            className="min-w-full md:h-[40vh] object-cover object-left-top rounded-2xl mr-5 hover:border-[3px] cursor-pointer border-grey-400 transition-all duration-100 ease-in" ref={eleContainer}
          />
        ))}
        {/* {loded && (
          <img
            src={IMG_BASE_URL + trendingMovies[index].backdrop_path}
            alt="..."
            className="duration-500 w-full h-full top-[50%] rounded-2xl"
          />
        )}
      </div > 
      <button onClick={nextMovie} className="text-white"> next </button>
      <button onClick={prevMovie} className="text-white"> previous </button> */}
    </div>
    </div>
  );
}
