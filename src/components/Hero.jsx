import React from "react";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";

const Hero = ({ thumbnail, backdrop }) => {
  const url = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="container pt-[68px] lg:grid lg:grid-cols-2 min-h-screen flex flex-col-reverse lg:gap-y-0 gap-y-3 lg:gap-x-3 justify-around">
      <div className="flex flex-col justify-around text-center lg:text-start">
        <div className="flex flex-col relative">
          <h1 className="text-5xl font-black">Watch. Enjoy. Relax.</h1>
          <h2 className="text-md mt-[10px] mb-4">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <button className="md:self-start px-5 py-3 rounded bg-primary lg:m-0 mx-auto">
            Check It Out!
          </button>
        </div>
        <div className="gap-3 grid grid-cols-3 z-5 xl:m-0 mx-auto pt-8">
          {thumbnail.map((data) => {
            return (
              <Image
                key={data.id}
                src={`${url}${data.poster_path}`}
                width={180}
                height={280}
                alt="movie-thumbnail"
                className="rounded-xl"
              />
            );
          })}
        </div>
      </div>
      <div className="relative lg:h-full h-[50vh]">
        <img
          src={`${url}${backdrop.backdrop_path}`}
          alt="backdrop"
          className="object-cover h-full w-full rounded-t-xl"
        />
        <div className="absolute right-5 bottom-10 md:flex hidden flex-col gap-2 ">
          <h2 className=" text-5xl font-bold drop-shadow-2xl text-end font-saira italic">{backdrop.title}</h2>
          <div className="flex justify-end items-center gap-2 drop-shadow-2xl">
            <p>{backdrop.vote_average}</p>
            <div className="text-secondary">
              <GiRoundStar />
            </div>
          </div>
          <p className="text-end md:w-10/12 w-full self-end bg-black bg-opacity-50 py-2 px-5 backdrop-blur-xl rounded-xl">{backdrop.overview}</p>
        </div>

        <div className="backdrop"></div>
      </div>
    </div>
  );
};

export default Hero;
