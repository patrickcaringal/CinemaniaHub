import { Fragment, memo } from "react";

import { SectionSlider, GenresCard } from "../../common";
import { tmdbImgPath } from "../../services";

const GenreSlider = memo(({ data }) => {
  return (
    <Fragment>
      <SectionSlider title="Medias" list={data} slidesPerView={4}>
        {(i) => <GenresCard image={tmdbImgPath("w342", i.file_path)} />}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
