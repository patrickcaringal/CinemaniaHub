import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../common";
import { tmdbImgPath } from "../../services";

const Collections = memo(({ data }) => {
  return (
    <Fragment>
      <SectionSlider
        title="Seasons"
        list={data}
        className="recommended-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
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
