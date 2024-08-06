import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../common";
import { tmdbImgPath } from "../../services";

const Collections = memo(({ data, isLoading }) => {
  const listData = isLoading ? [...Array(5)] : data?.slice(0, 10);

  return (
    <Fragment>
      <SectionSlider
        isLoading={isLoading}
        title="Seasons"
        list={listData}
        className="recommended-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            isLoading={isLoading}
            image={tmdbImgPath("w342", i.poster_path)}
            title={i.title || i.name}
            subtitle={`${i.episode_count} Episodes`}
            // watchlistLink="/playlist"
            link="/movies-detail" // season page
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

Collections.displayName = "Collections";
export default Collections;
