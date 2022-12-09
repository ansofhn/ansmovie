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
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });

    getTopRatedMovieList().then((result) => {
      setTopRatedMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
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

  return (
    <div className="bg-backGround">
      <Head>
        <title>Home - Movsoft</title>
      </Head>

      {/* Appearance Website*/}

      <Navbar onSearch={({ target }) => search(target.value)} />
      <Hero />
      <ScrollToTop />

      {/* Popular Movies */}

      <div className="py-24 bg-black/20">
        <div className="container space-y-10">
          <div className="text-center md:text-left md:grid md:grid-cols-2 md:px-6 lg:px-8 xl:px-0">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Online Streaming
              </div>
              <div className="text-4xl font-bold text-white">
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
              <div></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 2xl:gap-16">
            <PopularMovieList />
          </div>
        </div>
      </div>

      {/* Our Service */}

      <div className="h-screen md:h-[80vh] bg-backGround flex items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className=""></div>
          <div className="flex items-center text-white">
            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Our Services
              </div>
              <div className="w-4/5 text-3xl font-bold text-white md:text-4xl 2xl:w-3/5">
                Download Your Movies Watch Offline.
              </div>
              <div className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. LoremIpsumhas been the industry's standard dummy text
                ever since the 1500s. adskf;aimsdfjas
                ;dlkfiasd;flaksd;flka.dfgsdfgsdfgs
              </div>
              <div className="grid w-full grid-cols-6 gap-4 pt-6 md:w-5/6">
                <div className="flex items-center justify-center col-span-2">
                  <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                    <BiMoviePlay />
                  </div>
                </div>
                <div className="col-span-4 col-start-3 my-auto space-y-3">
                  <div className="text-lg font-bold">Enjoy on Your Movie.</div>
                  <div className="text-sm">ljasdlfkjalsdfkjalskdjflaskjdfl</div>
                </div>
                <div className="flex items-center justify-center col-span-2 row-start-3">
                  <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                    <BiCameraMovie />
                  </div>
                </div>
                <div className="col-span-4 col-start-3 row-start-3 my-auto space-y-3">
                  <div className="text-lg font-bold ">Watch Everywhere.</div>
                  <div className="text-sm">lkdsajflsdjkflajsdlfjalsdkjfla</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Movies */}

      <div className="py-24 bg-black/20">
        <div className="container">
          <div className="space-y-2 text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
              Online Streaming
            </div>
            <div className="text-4xl font-bold text-white">
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

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 2xl:gap-16">
            <TopRatedMovieList />
          </div>
        </div>
      </div>
      <Footer onSearch={({ target }) => search(target.value)} />
    </div>
  );
};

export default Home;
