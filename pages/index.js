import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getMovieList, searchMovie } from "../repository/api";

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
    <div className="bg-black">
      <Head>
        <title>Home | AnsMovie</title>
      </Head>
      <div className="py-5 text-4xl font-bold text-center text-gray-100 uppercase">
        ansmovie
      </div>
      <div className="text-center">
        <input
          placeholder="Search film.."
          className="p-2 my-2 bg-gray-100"
          onChange={({ target }) => search(target.value)}
        />
        <div className="flex flex-wrap items-center justify-center gap-5">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};

export default Home;
