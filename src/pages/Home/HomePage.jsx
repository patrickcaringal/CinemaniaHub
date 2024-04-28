import { memo, Fragment } from "react";
// hero slider
import HorizontalSlider from "./HorizontalSliderSection/HorizontalSlider";
import VerticalSectionSlider from "./VerticalSliderSection";
import GenreSlider from "./GenreSection/GenreSlider";

// sections
import TopTenMoviesToWatch from "./TopTenMoviesSection/TopTenMoviesToWatch";
import PopularTvSeries from "./PopularTvSeriesSection/PopularTvSeries";
import { useGenres, useTrending, useDiscover } from "../../hooks";

const HomePage = memo(() => {
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingLoading,
  } = useTrending({ entity: "all" });
  const { data: genreData } = useGenres({ entity: "movie" });
  const {
    data: topMovieData,
    error: topMovieError,
    isLoading: topMovieLoading,
  } = useDiscover({
    entity: "movie",
    queryParams: {
      "primary_release_date.gte": "2023-01-01",
      sort_by: "vote_count.desc",
    },
  });

  const {
    data: popularTvSeriesData,
    error: popularTvSeriesError,
    isLoading: popularTvSeriesLoading,
  } = useDiscover({
    entity: "tv",
    queryParams: {
      sort_by: "vote_count.desc",
    },
  });

  return (
    <Fragment>
      <HorizontalSlider
        data={trendingData.slice(0, 10)}
        error={trendingError}
        isLoading={trendingLoading}
      />

      <TopTenMoviesToWatch
        data={topMovieData.slice(0, 10)}
        error={topMovieError}
        isLoading={topMovieLoading}
      />

      <VerticalSectionSlider
        data={trendingData.slice(11, 20)}
        error={trendingError}
        isLoading={trendingLoading}
      />

      {/* <YourFavouritePersonality /> */}

      <PopularTvSeries
        data={popularTvSeriesData.slice(0, 10)}
        error={popularTvSeriesError}
        isLoading={popularTvSeriesLoading}
      />

      {/* <TabSlider /> */}
      <GenreSlider data={genreData.slice(0, 10)} />
      {/* <RecommendedForYou /> */}
      {/* <TopPicsForYou /> */}
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
