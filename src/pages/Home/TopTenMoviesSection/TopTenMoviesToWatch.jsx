import { memo, Fragment } from "react";

//components
import SectionSlider from "./SectionSlider";
import TopTenCard from "./TopTenCard";
import { detailPath } from "../../../services";

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
            imagePath={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
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
