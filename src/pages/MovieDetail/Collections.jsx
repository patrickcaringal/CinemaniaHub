import { Fragment, memo } from "react";

import { SectionSlider, CardStyle } from "../../common";
import { useCollection } from "../../hooks";
import { formatDate, sortByReleaseAsc } from "../../helpers";
import { detailPath, tmdbImgPath } from "../../services";

const Collections = memo(({ data }) => {
  const {
    data: collectionData,
    error,
    isLoading,
  } = useCollection({ id: data?.id }, [data?.id]);

  if (!collectionData || error) return null;

  const listData = isLoading
    ? [...Array(10)]
    : collectionData.parts
        .filter((i) => i.vote_count !== 0)
        .sort(sortByReleaseAsc);

  return (
    <Fragment>
      <SectionSlider
        isLoading={isLoading}
        title={collectionData.name}
        list={listData}
        className="recommended-block"
        slidesPerView={6}
      >
        {(i) => (
          <CardStyle
            isLoading={isLoading}
            image={tmdbImgPath("w342", i.poster_path)}
            title={i.title || i.name}
            subtitle={formatDate(i.release_date)}
            // watchlistLink="/playlist"
            link={detailPath("movie", i.id)}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

Collections.displayName = "Collections";
export default Collections;
