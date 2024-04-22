import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../../common";
import { tmdbImgPath, detailPath } from "../../../services";

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
            image={tmdbImgPath("w342", i.poster_path)}
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
