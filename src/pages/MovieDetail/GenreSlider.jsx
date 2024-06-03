import { Fragment, memo } from "react";

import { SectionSlider, GenresCard } from "../../common";
import { tmdbImgPath } from "../../services";

const GenreSlider = memo(({ data, isLoading = false }) => {
  const listData = isLoading ? [...Array(10)] : data;

  return (
    <Fragment>
      <SectionSlider
        isLoading={isLoading}
        title="Medias"
        list={listData}
        slidesPerView={4}
      >
        {(i) => (
          <GenresCard
            isLoading={isLoading}
            image={tmdbImgPath("w342", i.file_path)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
