import { lazy } from "react";

import FrontendLayout from "../layouts/FrontendLayout";
const OTTPage = lazy(() => import("../pages/Home/HomePage"));
const TvShowsDetail = lazy(() => import("../pages/TvShowDetail/DetailPage"));
const MovieDetail = lazy(() => import("../pages/MovieDetail/DetailPage"));
const CastList = lazy(() => import("../pages/MovieCredits/ListPage"));
const TvShowCastList = lazy(() => import("../pages/TvShowCredits/ListPage"));
const PersonDetailPage = lazy(() =>
  import("../pages/PersonDetail/PersonDetailPage")
);
const LoginPage = lazy(() => import("../pages/AuthPages/Login/LoginPage"));
const SignUpPage = lazy(() => import("../pages/AuthPages/SignUp/SignUpPage"));
const MovieDiscover = lazy(() => import("../pages/MovieDiscover/DiscoverPage"));
const TvShowDiscover = lazy(() =>
  import("../pages/TvShowDiscover/DiscoverPage")
);

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
      {
        path: "/person/:id",
        element: <PersonDetailPage />,
      },
    ],
  },
];
