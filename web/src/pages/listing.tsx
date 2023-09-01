import { useState } from "react";
import { Search } from "../shared/components/icons/search";
import { useMovies } from "../modules/movies/hooks/use-listing";
import { MoviesList } from "../modules/movies/components/movies-list";

const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading } = useMovies({
    limit: 10,
    page: 0,
    title: search,
  });
  return (
    <main className="p-3 mx-auto">
      <div className="flex items-center border  w-fit mx-auto border-gray-400 p-1 rounded-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" outline-none focus:outline-none"
        />
        <button
          onClick={() => setSearch(searchTerm)}
          disabled={searchTerm.length < 3}
          className="bg-blue-500 px-3 py-1 rounded-[5px] ml-2 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4 text-white" />
        </button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-8 p-3 mx-auto my-2">
          {data && <MoviesList movies={data} />}
        </div>
      )}
    </main>
  );
};

export default ListingPage;
