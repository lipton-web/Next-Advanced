import SearchInput from "@/components/SearchInput";
import MovieList from "@/components/MovieList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home(props) {
  console.log("홈", props);
  const { query = "" } = props.searchParams;

  return (
    <>
      <SearchInput />
      <Suspense key={query} fallback={<Loading />}>
        <MovieList query={query} />
      </Suspense>
    </>
  );
}
