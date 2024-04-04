import { memo, Fragment } from "react";
// hero slider
import OttHeroSlider from "./OttHeroSlider";
import VerticalSectionSlider from "./VerticalSectionSlider";
import GenreSlider from "./GenreSection/GenreSlider";

// sections
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import PopularMovies from "../../components/sections/PopularMovies";
import TabSlider from "../../components/sections/TabSlider";
import RecommendedForYou from "../../components/sections/RecommendedForYou";
import { useGenres, useTrending } from "../../hooks";
import Loader from "../../components/Loader";

//static data
import { ottVerticleLatestMovies } from "../../StaticData/data";

const HomePage = memo(() => {
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingLoading,
  } = useTrending({ entity: "all" });
  const { data: genreData } = useGenres({ entity: "movie" });

  return (
    <Fragment>
      <OttHeroSlider
        data={trendingData.slice(0, 10)}
        error={trendingError}
        isLoading={trendingLoading}
      />

      {/* NOTE: section not needed */}
      {/* <ContinueWatching /> */}

      <TopTenMoviesToWatch />

      {/* NOTE: section not needed */}
      {/* <OnlyOnStreamit /> */}
      <VerticalSectionSlider
        data={trendingData.slice(11, 20)}
        error={trendingError}
        isLoading={trendingLoading}
      />

      {/* <YourFavouritePersonality /> */}

      <PopularMovies />
      {/* <TabSlider /> */}
      <GenreSlider data={genreData.slice(0, 10)} />
      <RecommendedForYou />
      {/* <TopPicsForYou /> */}
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
