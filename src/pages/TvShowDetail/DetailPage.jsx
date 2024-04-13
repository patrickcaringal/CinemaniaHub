import { Fragment, memo } from "react";
import { useParams } from "react-router-dom";

import Banner from "./Banner";
import Collections from "./Collections";
import Recommendation from "./Recommendation";
import ImagesSection from "./GenreSlider";
import Casts from "./Casts";

import { useEnterExit } from "../../utilities/usePage";

//swiper
import { useTvShowDetail } from "../../hooks";

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
      <Casts data={cast?.slice(0, 10)} />
      {!!seasons.length && (
        <Collections data={seasons.filter((i) => !!i.season_number)} />
      )}
      {!!backdrops.length && (
        <ImagesSection
          data={backdrops
            .sort((a, b) => {
              return b.vote_count - a.vote_count;
            })
            .slice(0, 10)}
        />
      )}
      <Recommendation id={params?.id} />
    </Fragment>
  );
});

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
