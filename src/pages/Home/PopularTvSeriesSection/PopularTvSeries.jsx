import { Fragment, memo } from "react";

//componets
import SectionSlider from "../TopTenMoviesSection/SectionSlider";
import CardStyle from "./CardStyle";

const PopularTvSeries = memo(({ data = [], error, isLoading }) => {
  if (isLoading || error) return null;

  return (
    <Fragment>
      <SectionSlider
        title="Popular TV Series"
        list={data}
        className="popular-movies-block streamit-block"
      >
        {(i) => (
          <CardStyle
            image={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
            title={i.title || i.name}
            genres={i.genres}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

PopularTvSeries.displayName = "PopularTvSeries";
export default PopularTvSeries;
