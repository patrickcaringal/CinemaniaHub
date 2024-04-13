import { Fragment, memo } from "react";

//components
import { SectionSlider, GenresCard } from "../../../common";

const GenreSlider = memo(({ data }) => {
  return (
    <Fragment>
      <SectionSlider
        className="movie-geners-block"
        title="Genres"
        list={data}
        slidesPerView={6}
        link="/all-genres"
      >
        {(i) => <GenresCard title={i.name} image={i.thumbnail} />}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
