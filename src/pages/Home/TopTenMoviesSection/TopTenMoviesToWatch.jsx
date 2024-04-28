import { memo, Fragment } from "react";

import { SectionSlider, TopTenCard } from "../../../common";
import { detailPath, tmdbImgPath } from "../../../services";

const TopTenMoviesToWatch = memo(({ data = [], error, isLoading }) => {
  if (isLoading || error) return null;

  return (
    <Fragment>
      <SectionSlider
        title="top ten movies to watch"
        list={data}
        className="top-ten-block"
      >
        {(i) => (
          <TopTenCard
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
