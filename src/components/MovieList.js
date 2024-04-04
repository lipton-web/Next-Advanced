import MovieRepository from "@/persist/MovieRepository";
import MovieCard from "./MovieCard";

export default async function MovieList({ query }) {
  const movies = await MovieRepository.instance.search(query);

  if (movies.length === 0) {
    return <p className="notice">Not found movies</p>;
  }

  return (
    <ul className="movie-list">
      {movies.length > 0 &&
        movies.map((movie) => (
          <li className="item" key={movie.id}>
            <MovieCard {...movie} />
          </li>
        ))}
    </ul>
  );
}
