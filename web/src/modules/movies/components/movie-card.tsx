import { Movie } from "../types";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border-none overflow-hidden text-ellipsis">
      <img
        src={movie?.attributes?.posterImage?.original}
        alt={movie?.attributes?.titles?.en}
        className="w-full h-[400px] object-cover"
      />
      <div className="p-6">
        <h1 className="text-lg font-bold">
          {movie?.attributes?.titles?.en ||
            movie?.attributes?.titles?.en_us ||
            movie?.attributes?.titles?.en_jp ||
            "no title found"}
        </h1>
        <p className="text-sm truncate line-clamp-3 ">
          {movie?.attributes?.description}
        </p>
      </div>
    </div>
  );
};
