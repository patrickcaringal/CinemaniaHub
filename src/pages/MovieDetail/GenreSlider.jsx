import { Fragment, memo } from "react";

//components
import SectionSlider from "../../components/slider/SectionSlider";
import GenersCard from "../Home/GenreSection/GanresCard";

const GenreSlider = memo(({ data }) => {
  return (
    <Fragment>
      <SectionSlider
        // className="movie-geners-block"
        title="Medias"
        list={data}
        slidesPerView={6}
        link="/all-genres"
      >
        {(i) => (
          <GenersCard
            image={`https://image.tmdb.org/t/p/w342/${i.file_path}`}
            title={i.vote_count}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
