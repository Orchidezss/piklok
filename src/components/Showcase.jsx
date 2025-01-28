import React from "react";
import { GiRoundStar } from "react-icons/gi";
import MovieListHeader from "./MovieListHeader";

const Showcase = ({ data, isMovie }) => {
  let url = `https://image.tmdb.org/t/p/original`;
  console.log(data.genres);
  return (
    <div className="container pb-4">
      <div className="lg:grid lg:grid-cols-2 min-h-screen pt-[70px] gap-5 flex flex-col-reverse justify-around">
        <div className="flex flex-col md:justify-around">
          <div>
            <div className="flex gap-x-8 items-center">
              <img
                src={`${url}${data.poster_path}`}
                alt=""
                className="w-1/4 rounded-xl"
              />
              <h1 className="text-5xl font-black">{data.name}</h1>
            </div>
            <div className="flex gap-2 items-center mt-4 flex-wrap">
              <div className="text-secondary">
                <GiRoundStar />
              </div>
              <p className="text-text">{data.vote_average} | </p>
              {data.genres.map((genre) => {
                return <p key={genre.id}>{genre.name},</p>;
              })}
              <p className="font-semibold">{data.first_air_date}</p>
            </div>
            <p className="italic border-b w-fit mb-2">#{data.tagline}</p>
            <p>{data.overview}</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-5 items-center pt-4">
              {data.networks?.map((network) => {
                return (
                  <img
                    src={`${url}${network.logo_path}`}
                    key={network.id}
                    className="w-20 h-fit bg-text p-2 rounded-xl"
                  />
                );
              })}
              <a
                className="bg-primary px-5 py-3 rounded-xl"
                href={`${data.homepage}`}
              >
                Watch Now
              </a>
            </div>

            <p className={`${isMovie ? "hidden" : "font-semibold"}`}>
              {data.number_of_episodes} Episodes | {data.number_of_seasons}{" "}
              Seasons
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={`${url}${data.backdrop_path}`}
            alt=""
            className="object-cover h-full w-full rounded-t-xl"
          />
          <div className="backdrop"></div>
        </div>
      </div>
      <div
        className={`${
          isMovie ? "hidden" : "mt-[52px] p-5 bg-background2 rounded-xl"
        }`}
      >
        <h2 className="text-md text-xl">Created By</h2>
        <div className="flex gap-5 pt-4">
          {data.created_by?.map((by) => {
            return (
              <div className="flex flex-col w-40 bg-background rounded-xl items-center text-center">
                <img
                  src={`${url}${by.profile_path}`}
                  alt=""
                  key={by.id}
                  className="rounded-t-xl"
                />
                <h2 className="p-2 my-auto">{by.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${isMovie ? "hidden" : "mt-[52px]"}`}>
        <div>
          <h2 className="text-xl text-center">Seasons</h2>
          <div className="flex items-center gap-5 pt-4 flex-wrap justify-center">
            {data.seasons?.map((season) => {
              return (
                <div className="w-40 flex-col flex items-center bg-background2 rounded-xl">
                  <img
                    src={`${url}${season.poster_path}`}
                    alt=""
                    className="rounded-t-xl"
                  />
                  <p className="p-2">
                    {season.name} | {season.episode_count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
