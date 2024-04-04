import { Fragment, memo } from "react";

//components
import SectionSlider from "./SectionSlider";
import GenersCard from "./GanresCard";

//static data
import { geners } from "../../../StaticData/data";

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
        {(i) => <GenersCard title={i.name} image={i.thumbnail} />}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
