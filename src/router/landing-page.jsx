import { lazy } from "react";
// layout
import FrontendLayout from "../layouts/FrontendLayout";

// pages
const OTTPage = lazy(() => import("../pages/Home/HomePage"));
const OTTPage2 = lazy(() => import("../views/MainPages/OTTPage"));

// tv-shows pages
const TvShowsList = lazy(() => import("../views/MainPages/TvShowsPage"));
const TvShowsDetailOld = lazy(() => import("../views/TvShows/DetailPage"));
const TvShowsDetail = lazy(() => import("../pages/TvShowDetail/DetailPage"));
const LatestEpisodes = lazy(() => import("../views/TvShows/EpisodePage"));

// movies pages
const MoviePage = lazy(() => import("../views/MainPages/MoviesPage"));
const MovieDetail = lazy(() => import("../pages/MovieDetail/DetailPage"));
const MovieDetail2 = lazy(() => import("../views/Movies/DetailPage"));

// videos pages
const VideoList = lazy(() => import("../views/MainPages/VideosPage"));

// genre pages
const Playlist = lazy(() => import("../views/Playlist"));
const GenresPage = lazy(() => import("../views/GenresPage"));

//tag pages
const TagsPage = lazy(() => import("../views/TagsPage"));

// cast pages
const CastList = lazy(() => import("../pages/MovieCredits/ListPage"));
const TvShowCastList = lazy(() => import("../pages/TvShowCredits/ListPage"));
const CastListOld = lazy(() => import("../views/Cast/ListPage"));
const PersonDetailPageOld = lazy(() => import("../views/Cast/DetailPage"));
const PersonDetailPage = lazy(() =>
  import("../pages/PersonDetail/PersonDetailPage")
);
const CastViewAll = lazy(() => import("../views/Cast/ViewAll"));

// blog pages
const BlogList = lazy(() => import("../views/BlogPages/ListPage"));
const BlogDetail = lazy(() => import("../views/BlogPages/DetailPage"));
const BlogGrid = lazy(() => import("../views/BlogPages/GridList"));
const Blogtemplate = lazy(() => import("../views/BlogPages/Blogtemplate"));
const BlogSingle = lazy(() => import("../views/BlogPages/BlogSingle"));
const SidebarList = lazy(() => import("../views/BlogPages/SidebarListPage"));

// extra pages
const AboutPage = lazy(() => import("../views/ExtraPages/AboutPage"));
const ContactPage = lazy(() => import("../views/ExtraPages/ContactPage"));
const FAQPage = lazy(() => import("../views/ExtraPages/FAQPage"));
const PrivacyPolicy = lazy(() => import("../views/ExtraPages/PrivacyPolicy"));
const TermsofUse = lazy(() => import("../views/ExtraPages/TermsofUse"));
const PricingPage = lazy(() => import("../views/PricingPage"));
const ErrorPage1 = lazy(() => import("../views/ExtraPages/ErrorPage1"));
const ErrorPage2 = lazy(() => import("../views/ExtraPages/ErrorPage2"));

//login pages
// const LoginPage = lazy(() => import("../views/AuthPages/LoginPage"));
const LoginPage = lazy(() => import("../pages/AuthPages/Login/LoginPage"));
// const SignUpPage = lazy(() => import("../views/AuthPages/SignUpPage"));
const SignUpPage = lazy(() => import("../pages/AuthPages/SignUp/SignUpPage"));
const LostPassword = lazy(() => import("../views/AuthPages/LostPassword"));

// merchandise pages
const IndexPage = lazy(() => import("../views/MerchandisePages/IndexPage"));
const ShopCategoryPage = lazy(() =>
  import("../views/MerchandisePages/ShopCategoryPage")
);
const CartPage = lazy(() => import("../views/MerchandisePages/CartPage"));
const CheckOutPage = lazy(() =>
  import("../views/MerchandisePages/CheckoutPage")
);
const WishlistPage = lazy(() =>
  import("../views/MerchandisePages/WishlistPage")
);
const TrackOrder = lazy(() => import("../views/MerchandisePages/TrackOrder"));
const MyAccount = lazy(() => import("../views/MerchandisePages/my-account"));

// view all page
const ViewAll = lazy(() => import("../views/ViewAll"));
const MovieDiscover = lazy(() => import("../pages/MovieDiscover/DiscoverPage"));
const TvShowDiscover = lazy(() =>
  import("../pages/TvShowDiscover/DiscoverPage")
);
const CommingSoonPage = lazy(() =>
  import("../views/ExtraPages/CommingSoonPage")
);
const HomePage = lazy(() => import("../views/MainPages/IndexPage"));
const RestrictedPage = lazy(() => import("../views/Movies/RestictedPage"));
const RelatedMerchandisePage = lazy(() =>
  import("../views/Movies/ReletedMerchandiesPage")
);
const VideoDetail = lazy(() => import("../views/VideosPage/DetailPage"));
const ProductDetail = lazy(() =>
  import("../views/MerchandisePages/ProductDetailPage")
);
const WatchlistDetail = lazy(() => import("../views/WatchlistDetail"));
const AllGenres = lazy(() => import("../views/AllGenres"));
const AllProduct = lazy(() => import("../views/MerchandisePages/AllProduct"));

export const LandingpageRouter = [
  {
    path: "/",
    element: <FrontendLayout HeaderMega="true" FooterCompact="true" />,
    errorElement: <>Not Found</>,
    children: [
      {
        path: "",
        element: <OTTPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      // {
      //   path: "/home",
      //   element: <HomePage />,
      // },
      // {
      //   path: "/home2",
      //   element: <OTTPage2 />,
      // },
      // {
      //   path: "/movies",
      //   element: <MoviePage />,
      // },
      {
        path: "/movie-discover",
        element: <MovieDiscover />,
      },
      {
        path: "/tv-discover",
        element: <TvShowDiscover />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      // {
      //   path: "/movie-detail",
      //   element: <MovieDetail2 />,
      // },
      {
        path: "/movie/:id/credits",
        element: <CastList />,
      },

      {
        path: "/tv/:id",
        element: <TvShowsDetail />,
      },
      {
        path: "/tv/:id/credits",
        element: <TvShowCastList />,
      },

      // {
      //   path: "/shows-details",
      //   element: <TvShowsDetailOld />,
      // },

      // {
      //   path: "/tv-shows",
      //   element: <TvShowsList />,
      // },

      {
        path: "/person/:id",
        element: <PersonDetailPage />,
      },

      {
        path: "/episodes",
        element: <LatestEpisodes />,
      },
      {
        path: "/videos",
        element: <VideoList />,
      },
      {
        path: "/videos-detail",
        element: <VideoDetail />,
      },
      {
        path: "/restricted-content",
        element: <RestrictedPage />,
      },
      {
        path: "/related-merchandise",
        element: <RelatedMerchandisePage />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/watchlist-detail",
        element: <WatchlistDetail />,
      },
      {
        path: "/geners",
        element: <GenresPage />,
      },
      {
        path: "/all-genres",
        element: <AllGenres />,
      },
      {
        path: "/tags",
        element: <TagsPage />,
      },
      {
        path: "/cast",
        element: <CastListOld />,
      },
      {
        path: "/cast-detail",
        element: <PersonDetailPageOld />,
      },
      {
        path: "/cast-view-all",
        element: <CastViewAll />,
      },
      {
        path: "/blogs",
        element: <BlogList title="Blog Listing" />,
      },
      {
        path: "/blogs-tag",
        element: <BlogList title="Comedy" />,
      },
      {
        path: "/blogs-category",
        element: <BlogList title="Drama" />,
      },
      {
        path: "/blogs-date",
        element: <BlogList title="Day: September 23, 2022" />,
      },
      {
        path: "/blogs-author",
        element: <BlogList title="Author: Goldenmace" />,
      },
      {
        path: "/blogs/:grid",
        element: <BlogGrid />,
      },
      {
        path: "/blogs-sidebar/:position",
        element: <SidebarList />,
      },
      {
        path: "/blogs-detail",
        element: <BlogDetail />,
      },
      {
        path: "/blog-template",
        element: <Blogtemplate />,
      },
      {
        path: "/blog-single/:type",
        element: <BlogSingle />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-use",
        element: <TermsofUse />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/view-all",
        element: <ViewAll />,
      },
      {
        path: "/all-products",
        element: <AllProduct />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/merchandise-store",
        element: <IndexPage />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/register",
  //   element: <SignUpPage />,
  // },
  // {
  //   path: "/",
  //   element: (
  //     <FrontendLayout HeaderMerchandise="true" FooterMerchandise="true" />
  //   ),
  //   children: [
  //     {
  //       path: "/merchandise-store",
  //       element: <IndexPage />,
  //     },
  //     {
  //       path: "/shop",
  //       element: <ShopCategoryPage />,
  //     },
  //     {
  //       path: "/cart",
  //       element: <CartPage />,
  //     },
  //     {
  //       path: "/checkout",
  //       element: <CheckOutPage />,
  //     },
  //     {
  //       path: "/wishlist",
  //       element: <WishlistPage />,
  //     },
  //     {
  //       path: "/track-order",
  //       element: <TrackOrder />,
  //     },
  //     {
  //       path: "/account",
  //       element: <MyAccount />,
  //     },
  //   ],
  // },
  // {
  //   path: "/coming-soon",
  //   element: <CommingSoonPage />,
  // },
  // {
  //   path: "/error-page-one",
  //   element: <ErrorPage1 />,
  // },
  // {
  //   path: "/error-page-two",
  //   element: <ErrorPage2 />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },

  // {
  //   path: "/lost-password",
  //   element: <LostPassword />,
  // },
];
