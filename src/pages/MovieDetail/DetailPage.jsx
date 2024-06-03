import { Fragment, memo } from "react";

import { useParams } from "react-router-dom";

import Collections from "./Collections";
import Recommendation from "./Recommendation";
import ImagesSection from "./GenreSlider";
import Banner from "./Banner";
import Casts from "./Casts";

import { useEnterExit } from "../../utilities/usePage";
import { creditsPath } from "../../services";
import { useMovieDetail } from "../../hooks";
import { sortByVote } from "../../helpers";

const MovieDetail = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = useMovieDetail(
    {
      id: params?.id,
      queryParams: {
        append_to_response: "credits,collections,images",
        include_image_language: "en,null",
      },
    },
    [params?.id]
  );

  useEnterExit();

  if (!data || error) return null;

  const { credits, belongs_to_collection, images } = data;
  const { cast } = credits;
  const { backdrops } = images;

  return (
    <Fragment>
      <Banner data={data} isLoading={isLoading} />
      <Casts
        isLoading={isLoading}
        data={cast?.slice(0, 10)}
        viewAllLink={creditsPath("movie", params?.id)}
      />
      {!!belongs_to_collection && <Collections data={belongs_to_collection} />}
      {!!backdrops.length && (
        <ImagesSection
          isLoading={isLoading}
          data={backdrops.sort(sortByVote).slice(0, 10)}
        />
      )}
      <Recommendation id={params?.id} />
    </Fragment>
  );
});

MovieDetail.displayName = "MovieDetail";
export default MovieDetail;
