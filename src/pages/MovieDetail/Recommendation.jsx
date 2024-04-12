import { Fragment, memo } from "react";

import SectionSlider from "../../components/slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";
import { detailPath } from "../../services";

import { useRecommendations } from "../../hooks";

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

  return (
    <Fragment>
      <SectionSlider
        title="Recommendations"
        list={recommendData}
        className="related-movie-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            image={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
            title={i.title || i.name}
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
