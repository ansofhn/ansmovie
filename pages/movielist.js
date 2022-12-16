import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { getLatestMovieList } from "../repository/api";
import { Pagination } from "antd";

const movielist = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    getLatestMovieList(1).then((result) => {
      setLatestMovies(result);
    });
  }, []);

  const changePage = (x) => {
    getLatestMovieList(x).then((result) => {
      setLatestMovies(result);
    });
  };

  const MovieList = () => {
    return latestMovies.map((movie, i) => {
      return (
        <div className="pb-10 text-white md:w-80 lg:w-72 2xl:w-80" key={i}>
          <div className="overflow-hidden rounded-lg ">
            <img
              className="h-full"
              src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${movie.poster_path}`}
            />
          </div>
          <div className="px-1 py-4">
            <div className="flex items-center h-10 font-semibold">
              {movie.title}
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="text-xs font-medium text-softCream">
              {movie.release_date}
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <AiFillLike className="text-sm text-softCream" />
              {movie.vote_average}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-backGround">
      <div className="pb-40 text-center pt-60 bg-black/20">
        <div className="text-4xl font-bold text-white md:text-6xl">
          Our Movie
        </div>
        <div className="text-sm font-semibold text-white uppercase">
          <span className="mr-2 text-softCream">Home</span> |{" "}
          <span className="ml-2">Movie</span>
        </div>
      </div>
      <Navbar />
      <div className="py-24">
        <div className="container space-y-10">
          <div className="text-center md:text-left md:grid md:grid-cols-2 md:px-6 lg:px-8 xl:px-0">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Online Streaming
              </div>
              <div className="text-3xl font-bold text-white md:text-4xl">
                Latest Movies
              </div>
            </div>
            <div className="flex items-center justify-center pt-10 md:pt-0 md:items-end md:justify-end">
              <div className="px-3 py-2 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                Movies
              </div>
              <div className="px-3 py-2 ml-3 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                TV Show
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 px-2 pt-6 md:px-0 2xl:gap-16">
            <MovieList />
            <Pagination
              defaultCurrent={1}
              onChange={changePage}
              total={100}
              className={
                "w-full md:mx-8 lg:mx-8 xl:mx-0 2xl:mx-4 p-1 bg-white font-semibold text-center items-center rounded-md flex justify-start"
              }
            />
          </div>
        </div>
      </div>
      <Callback />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default movielist;
