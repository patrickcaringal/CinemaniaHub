import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../common";
import { useCollection } from "../../hooks";
import { formatDate } from "../../helpers";
import { tmdbImgPath } from "../../services";

const MoviesRecommendedForYou = memo(({ data }) => {
  const {
    data: collectionData,
    error,
    isLoading,
  } = useCollection({
    id: data?.id,
  });

  if (!collectionData || isLoading || error) return null;

  return (
    <Fragment>
      <SectionSlider
        title={collectionData.name}
        list={collectionData.parts.filter((i) => i.vote_count !== 0)}
        className="recommended-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            image={tmdbImgPath("w342", i.poster_path)}
            title={i.title || i.name}
            subtitle={formatDate(i.release_date)}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

MoviesRecommendedForYou.displayName = "MoviesRecommendedForYou";
export default MoviesRecommendedForYou;
