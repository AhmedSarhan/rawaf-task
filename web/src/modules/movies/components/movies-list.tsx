import { Movie } from "../types";
import { MovieCard } from "./movie-card";

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-3 gap-8 p-3 mx-auto my-2">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
