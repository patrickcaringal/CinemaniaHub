import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../../common";
import { tmdbImgPath, detailPath } from "../../../services";

const PopularTvSeries = memo(({ data = [], error, isLoading }) => {
  if (error) return null;
  const listData = isLoading ? [...Array(10)] : data;

  return (
    <Fragment>
      <SectionSlider
        isLoading={isLoading}
        title="Popular TV Series"
        list={listData}
        className="popular-movies-block streamit-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            isLoading={isLoading}
            image={tmdbImgPath("w342", i.poster_path)}
            title={i.title || i.name}
            subtitle={i?.genres?.join(", ")}
            link={detailPath("tv", i.id)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

PopularTvSeries.displayName = "PopularTvSeries";
export default PopularTvSeries;
