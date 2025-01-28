import React from "react";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";
import Link from "next/link";


const MovieListMovies = ({ movies }) => {
      const url = `https://image.tmdb.org/t/p/original`

  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-4 gap-5">
      {movies?.map((data) => {
        return (
          <Link
            href={`/movie/${data.id}`}
            className="rounded-xl hover:outline transition-all"
          >
            <Image
              key={data.id}
              src={`${url}${data.poster_path}`}
              width={280}
              height={380}
              alt=".."
              className="rounded-xl"
            />
            <div className="px-2 pb-2 flex flex-col gap-1 mt-1">
              <p className="text-lg font-semibold" key={data.id}>
                {data.title}
              </p>

              <div className="flex gap-2 items-center">
                <div className="text-secondary">
                  <GiRoundStar />
                </div>
                <p>
                  {data.vote_average} • {data.release_date}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieListMovies;
