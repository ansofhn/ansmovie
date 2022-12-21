import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  getPopularMovieList,
  getTopRatedMovieList,
  searchMovie,
} from "../repository/api";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { AiFillLike } from "react-icons/ai";
import Service from "../components/Service";
import Callback from "../components/Callback";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pricing from "../components/Pricing";
// import { Pagination } from "antd";
import CallbackBanner from "../components/CallbackBanner";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });

    getTopRatedMovieList(1).then((result) => {
      setTopRatedMovies(result);
    });
  }, []);

  const changePage = (x) => {
    getTopRatedMovieList(x).then((result) => {
      setTopRatedMovies(result);
    });
  };

  const PopularMovieList = () => {
    return (
      <div
        id="slider"
        className="flex px-10 md:px-0 gap-10 snap-x snap-mandatory md:gap-8 overflow-x-scroll 2xl:gap-[74px] scroll scroll-smooth scrollbar-hide"
      >
        {popularMovies.map((movie, i) => {
          return (
            <div
              className="pb-10 snap-center md:snap-start text-white w-[320px] md:w-80 lg:w-72 2xl:w-80"
              key={i}
            >
              <div className="overflow-hidden rounded-lg w-[320px] md:w-80 lg:w-72 2xl:w-80 h-[514.5px] md:h-[480px] lg:h-[432px] 2xl:h-[480px]">
                <img
                  className="h-[500px] md:h-[480px] lg:h-[432px] 2xl:h-[480px]"
                  src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${movie.poster_path}`}
                />
              </div>
              <div className="px-2 py-4">
                <div className="flex items-center h-10 font-semibold">
                  {movie.title}
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
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
        })}
      </div>
    );
  };

  const TopRatedMovieList = () => {
    return topRatedMovies.map((movie, i) => {
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

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query);
      setTopRatedMovies(query);
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-backGround">
      <Head>
        <title>Home - Movsoft</title>
      </Head>

      <Navbar onSearch={({ target }) => search(target.value)} />
      <Hero />

      {/* Popular Movies */}

      <div className="py-24 bg-black/20">
        <div className="container space-y-10">
          <div className="text-center md:text-left md:grid md:grid-cols-2 md:px-6 lg:px-8 xl:px-0">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Online Streaming
              </div>
              <div className="text-3xl font-bold text-white md:text-4xl">
                Popular Movies
              </div>
            </div>
            <div className="flex items-center justify-center pt-10 md:pt-0 md:items-end md:justify-end">
              <div className="px-3 py-2 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                Movies
              </div>
              <div className="px-3 py-2 ml-3 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                TV Show
              </div>
              <div
                className={
                  "hidden lg:flex lg:items-center lg:gap-2 lg:text-white/90 lg:ml-4"
                }
              >
                <div
                  onClick={slideLeft}
                  className="p-2.5 border-2 border-softCream/70 rounded-full cursor-pointer"
                >
                  <FaChevronLeft />
                </div>
                <div
                  onClick={slideRight}
                  className="p-2.5 border-2 border-softCream/70 rounded-full cursor-pointer"
                >
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center px-2 md:px-8 lg:px-8 xl:px-0">
            <PopularMovieList />
          </div>
        </div>
      </div>

      {/* Our Service */}

      <Service />

      {/* Top Rated Movies */}

      <div className="py-24 bg-black/20">
        <div className="container">
          <div className="space-y-2 text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
              Online Streaming
            </div>
            <div className="text-3xl font-bold text-white md:text-4xl">
              Top Rated Movies
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <div className="px-3 py-2 text-xs font-medium text-white transition duration-300 rounded-sm cursor-pointer border-x-2 border-x-softCream sm:py-2 sm:text-sm sm:px-10 bg-backGround">
              Movies
            </div>
            <div className="px-3 py-2 ml-3 text-xs font-medium text-white transition duration-300 rounded-sm cursor-pointer border-x-2 border-x-softCream sm:py-2 sm:text-sm sm:px-10 bg-backGround">
              TV Show
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 px-2 pt-6 md:px-0 2xl:gap-16">
            <TopRatedMovieList />
            {/* <Pagination
              defaultCurrent={1}
              onChange={changePage}
              total={100}
              pageSize={10}
              className={
                "w-full md:mx-8 lg:mx-8 xl:mx-0 2xl:mx-4 p-1 bg-white  font-semibold text-center items-center rounded-md flex justify-start"
              }
            /> */}
          </div>
        </div>
      </div>
      <CallbackBanner />
      <Pricing />
      <Callback />
      <ScrollToTop />

      <Footer onSearch={({ target }) => search(target.value)} />
    </div>
  );
};

export default Home;
