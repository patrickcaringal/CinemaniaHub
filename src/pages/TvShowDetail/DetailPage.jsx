import { Fragment, memo } from "react";
import { useParams } from "react-router-dom";

import Banner from "./Banner";
import Collections from "./Collections";
import Recommendation from "./Recommendation";
import ImagesSection from "./GenreSlider";
import Casts from "./Casts";

import { creditsPath } from "../../services";
import { useEnterExit } from "../../utilities/usePage";

import { useTvShowDetail } from "../../hooks";
import { sortByOrder, sortByVote } from "../../helpers";

const TvShowsDetail = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = useTvShowDetail(
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

  if (!data || isLoading || error) return null;

  const { credits, images, seasons } = data;
  const { cast } = credits;
  const { backdrops } = images;

  return (
    <Fragment>
      <Banner data={data} />
      <Casts
        data={cast?.slice(0, 10).sort(sortByOrder)}
        viewAllLink={creditsPath("tv", params?.id)}
      />
      {!!seasons.length && (
        <Collections data={seasons.filter((i) => !!i.season_number)} />
      )}
      {!!backdrops.length && (
        <ImagesSection data={backdrops.sort(sortByVote).slice(0, 10)} />
      )}
      <Recommendation id={params?.id} />
    </Fragment>
  );
});

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
