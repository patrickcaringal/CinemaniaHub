import { Fragment, memo } from "react";

//componets
import { SectionSlider, CardStyle } from "../../../common";
import { detailPath } from "../../../services";

const PopularTvSeries = memo(({ data = [], error, isLoading }) => {
  if (isLoading || error) return null;

  return (
    <Fragment>
      <SectionSlider
        title="Popular TV Series"
        list={data}
        className="popular-movies-block streamit-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            image={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
            title={i.title || i.name}
            subtitle={i.genres.join(", ")}
            link={detailPath("tv", i.id)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

PopularTvSeries.displayName = "PopularTvSeries";
export default PopularTvSeries;
