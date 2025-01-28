import MovieListTV from "@/components/MovieListTV";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";

const page = async ({params}) => {
  const url = '/tvshows/'
  const page = params.page
  const response = await fetch(
    `${process.env.BASE_URL}/tv/popular?page=${page}&api_key=${process.env.API_KEY}`
  );
  const popularResponse = await response.json();
  const result = popularResponse.results

  return (
    <div className="pt-[68px] container">
      <h1 className="text-3xl font-semibold text-center">TV Shows</h1>
      <MovieListTV movies={result} />
      <Pagination page={page} url={url}/>
    </div>
  );
};

export default page;
