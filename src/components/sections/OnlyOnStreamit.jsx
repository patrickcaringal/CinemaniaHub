import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

const OnlyOnStreamit = memo(() => {
  const [title] = useState("Only On Streamit");
  const [onlyonstreamit] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={onlyonstreamit}
        className="streamit-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

OnlyOnStreamit.displayName = "OnlyOnStreamit";
export default OnlyOnStreamit;
