import { memo, Fragment } from "react";

import { SectionSlider, TopTenCard } from "../../../common";
import { detailPath, tmdbImgPath } from "../../../services";

const TopTenMoviesToWatch = memo(({ data = [], error, isLoading }) => {
  if (error) return null;
  const listData = isLoading ? [...Array(10)] : data;

  return (
    <Fragment>
      <SectionSlider
        isLoading={isLoading}
        title="top ten movies to watch"
        list={listData}
        className="top-ten-block"
      >
        {(i) => (
          <TopTenCard
            isLoading={isLoading}
            imagePath={tmdbImgPath("w342", i.poster_path)}
            countValue={i.count}
            link={detailPath("movie", i.id)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
