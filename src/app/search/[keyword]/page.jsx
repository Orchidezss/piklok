import MovieListMovies from "@/components/MovieListMovies";
const apiKey = process.env.API_KEY;
const baseURL = process.env.BASE_URL;

const page = async ({ params }) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword)
  const keywordResponse = await fetch(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${keyword}`
  );
  const keywordMoviesRes = await keywordResponse.json();
  const keywordMovies = keywordMoviesRes.results;
  return (
    <div className="pt-[98px]">
      <div className="container fixed top-[64px] bg-background left-1/2 -translate-x-1/2 text-center py-1">
        <p>Search for : <span className="font-bold">"{decodeKeyword}"</span></p>
      </div>

      <MovieListMovies movies={keywordMovies} />
    </div>
  );
};

export default page;
