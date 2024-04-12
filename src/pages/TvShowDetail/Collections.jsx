import { Fragment, memo } from "react";

//components
import SectionSlider from "../../components/slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

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
            image={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
            title={i.title || i.name}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

Collections.displayName = "Collections";
export default Collections;
