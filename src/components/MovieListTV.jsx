import React from "react";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";
import Link from "next/link";

const MovieListTV = ({ movies }) => {
  let url = `https://image.tmdb.org/t/p/original`;

  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  pt-4 gap-5">
      {movies.map((data) => {
        return (
          <Link
            className="rounded-xl hover:outline transition-all"
            href={`/tv/${data.id}`}
          >
            <Image
              key={data.id}
              src={`${url}${data.poster_path}`}
              width={280}
              height={380}
              alt=".."
              className="rounded-xl"
            />
            <div className="px-2 pb-2">
              <p className="text-lg font-semibold" key={data.id}>
                {data.name}
              </p>
              <div className="flex gap-2 items-center">
                <div className="text-secondary">
                  <GiRoundStar />
                </div>

                <p>{data.vote_average} • {data.first_air_date}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieListTV;
