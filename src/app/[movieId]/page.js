import Loading from "@/components/Loading";
import MovieDetailCard from "@/components/MovieDetailCard";
import MovieDetailWrap from "@/components/MovieDetailWrap";
import { Suspense, useMemo } from "react";

export default function MoveDetailPage(props) {
  console.log("영화 상세", props);
  const { movieId } = props.params;
  const idToNumber = parseInt(movieId);

  return (
    // <Suspense key={idToNumber} fallback={<Loading />}>
    <MovieDetailWrap>
      <MovieDetailCard id={idToNumber} />
    </MovieDetailWrap>
    // </Suspense>
  );
}
