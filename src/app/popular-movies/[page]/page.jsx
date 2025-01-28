import MovieListMovies from "@/components/MovieListMovies";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";

const page = async ({params}) => {
  const page = params.page
  const url = '/popular-movies/'
  const response = await fetch(
    `${process.env.BASE_URL}/movie/popular?page=${page}&api_key=${process.env.API_KEY}`
  );
  const popularResponse = await response.json();
  const result = popularResponse.results

  return (
    <div className="pt-[68px] container">
      <h1 className="text-3xl font-semibold text-center">Movies</h1>
      <MovieListMovies movies={result} />
      <Pagination page={page} url={url}/>
    </div>
  );
};

export default page;
