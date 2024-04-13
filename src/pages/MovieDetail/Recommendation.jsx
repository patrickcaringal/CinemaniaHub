import { Fragment, memo } from "react";

import { CardStyle, SectionSlider } from "../../common";
import { detailPath, tmdbImgPath } from "../../services";

import { useRecommendations } from "../../hooks";
import { embedGenreNames } from "../../helpers";

const Recommendation = memo(({ id }) => {
  const {
    data: recommendData,
    error,
    isLoading,
  } = useRecommendations({
    entity: "movie",
    id,
  });

  if (!recommendData || isLoading || error) return null;

  const listData = embedGenreNames("movie", recommendData);

  return (
    <Fragment>
      <SectionSlider
        title="Recommendations"
        list={listData}
        className="related-movie-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            image={tmdbImgPath("w342", i.poster_path)}
            title={i.title || i.name}
            subtitle={i.genres.join(", ")}
            watchlistLink="/playlist"
            link={detailPath("movie", i.id)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

Recommendation.displayName = "Recommendation";
export default Recommendation;
