import { memo } from "react";

// hero slider
import HomeHeroSlider from "../../components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import LatestMovies from "../../components/sections/LatestMovies";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import TrendingSlider from "../../components/sections/Trending";
import SuggestedBlock from "../../components/sections/SuggestedBlock";
import RecommendedTVShow from "../../components/sections/RecommendedTVShow";
import ParallexSection from "../../components/sections/ParallexSection";

//static data
import { verticleLatestMovies, latestMovie } from "../../StaticData/data";

const HomePage = memo(() => {
  return (
    <>
      <HomeHeroSlider />

      <ContinueWatching />

      <UpcomingMovies />

      <LatestMovies sliderData={latestMovie} />

      <VerticalSectionSlider sliderData={verticleLatestMovies} />

      <SuggestedBlock />

      <ParallexSection />

      <TrendingSlider />

      <RecommendedTVShow />
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
