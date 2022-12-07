import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getMovieList, searchMovie } from "../repository/api";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="text-black bg-gray-300 w-[400px]" key={i}>
          <div className="">{movie.title}</div>
          <img
            className="h-full"
            src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${movie.poster_path}`}
          />
          <div className="">{movie.release_date}</div>
          <div className="">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query);
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="bg-backGround">
      <Head>
        <title>Home | AnsMovie</title>
      </Head>

      {/* Appearance Website*/}

      <Navbar />
      <Hero />
      <ScrollToTop />

      {/* Appearance Website*/}

      <div className="py-20 text-center bg-black/20">
        <input
          placeholder="Search film.."
          className="p-2 my-2 bg-gray-100"
          onChange={({ target }) => search(target.value)}
        />
        <div className="flex flex-wrap items-center justify-center gap-5">
          <PopularMovieList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
