import { Movie } from "@rawaf/shared";
import { MovieCard } from "./movie-card";

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-3 gap-8 p-3 mx-auto my-2 max-w-[800px]">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
