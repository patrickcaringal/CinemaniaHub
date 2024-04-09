import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../../components/slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

import { useCollection } from "../../hooks";

const MoviesRecommendedForYou = memo(({ data }) => {
  const {
    data: collectionData,
    error,
    isLoading,
  } = useCollection({
    id: data?.id,
  });
  console.log({ collectionData });

  if (!collectionData || isLoading || error) return null;

  return (
    <Fragment>
      <SectionSlider
        title={collectionData.name}
        list={collectionData.parts.filter((i) => i.vote_count !== 0)}
        className="recommended-block"
        slidesPerView={5}
      >
        {(i) => (
          <CardStyle
            image={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
            title={i.title || i.name}
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
