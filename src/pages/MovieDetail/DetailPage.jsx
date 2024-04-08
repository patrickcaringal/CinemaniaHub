import React, { Fragment, memo } from "react";
import * as dayjs from "dayjs";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Image } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//components
import ReviewComponent from "../../components/ReviewComponent";
import Sources from "../../components/Sources";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import RelatedVideos from "../../components/sections/RelatedVideos";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import RelatedMovies from "../../components/sections/RelatedMovies";
import FsLightBox from "../../components/fslight-box";
import RatingStar from "../../components/rating-star";
import VideoJS from "../../components/plugins/VideoJs";
import { formatRuntime } from "../../helpers/movie";

//function
import { generateImgPath } from "../../StaticData/data";

//utilites
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMovieDetail } from "../../hooks";

const MovieDetail = memo(() => {
  const params = useParams();

  const { data, error, isLoading } = useMovieDetail({ id: params?.id });

  // date, type
  const shows = {
    id: 1,
    slug: "zombie-world",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    title: "Zombie World",
    detail:
      "Zombie Island is a 1998 direct-to-video animated comedy horror film based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a year-long hiatus from Mystery, Inc. to investigate a bayou island said to be haunted by the ghost of the pirate Morgan Moonscar. The film was directed by Jim Stenstrum, from a screenplay by Glenn Leopold.",
    season_type: "2 Season",
    certificate: "Adventure",
    rating: 4.5,
    likes: 9,
    rating_from: "Imdb",
    geners: ["action", "adventure", "drama"],
    tags: ["brother", "brother-relationship", "kings", "vikings"],
    video_link: "",
    video_type: "video",
    is_restricted: false,

    cast: [
      {
        title: "James Chinlund",
        thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
        as: "As James",
      },
      {
        title: "James Earl Jones",
        thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
        as: "As Jones",
      },
    ],
    crew: [
      {
        title: "Jeff Nathanson ",
        thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
        as: "Writing",
      },
      {
        title: " Irene Mecchi ",
        thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
        as: "Writing",
      },
      {
        title: " Karen Gilchrist ",
        thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
        as: "Production",
      },
    ],
    created_by_username: "Admin",
    created_at: "Feb 2019",
    ranking: "#1 in Series Today ",
    date: "Nov 2020",
  };

  // const data = {
  //   adult: false,
  //   backdrop_path: "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
  //   belongs_to_collection: null,
  //   budget: 135000000,
  //   genres: [
  //     {
  //       id: 28,
  //       name: "Action",
  //     },
  //     {
  //       id: 878,
  //       name: "Science Fiction",
  //     },
  //     {
  //       id: 12,
  //       name: "Adventure",
  //     },
  //     {
  //       id: 14,
  //       name: "Fantasy",
  //     },
  //   ],
  //   homepage: "https://www.godzillaxkongmovie.com",
  //   id: 823464,
  //   imdb_id: "tt14539740",
  //   original_language: "en",
  //   original_title: "Godzilla x Kong: The New Empire",
  //   overview:
  //     "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
  //   popularity: 3537.982,
  //   poster_path: "/1hUTqPnfTvuupk7XW7WCkWYW4M1.jpg",
  //   production_companies: [
  //     {
  //       id: 923,
  //       logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
  //       name: "Legendary Pictures",
  //       origin_country: "US",
  //     },
  //     {
  //       id: 174,
  //       logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
  //       name: "Warner Bros. Pictures",
  //       origin_country: "US",
  //     },
  //   ],
  //   production_countries: [
  //     {
  //       iso_3166_1: "US",
  //       name: "United States of America",
  //     },
  //   ],
  //   release_date: "2024-03-27",
  //   revenue: 214305986,
  //   runtime: 115,
  //   spoken_languages: [
  //     {
  //       english_name: "English",
  //       iso_639_1: "en",
  //       name: "English",
  //     },
  //   ],
  //   status: "Released",
  //   tagline: "Rise together or fall alone.",
  //   title: "Godzilla x Kong: The New Empire",
  //   video: false,
  //   vote_average: 6.7,
  //   vote_count: 462,
  // };

  useEnterExit();

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: "https://www.youtube.com/watch?v=QCGq1epI9pQ",
        type: "video/youtube",
      },
    ],
    youtube: { iv_load_policy: 1 },
  };

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player;

  //   // You can handle player events here, for example:
  //   player.on("waiting", () => {
  //     videojs.log("player is waiting");
  //   });

  //   player.on("dispose", () => {
  //     videojs.log("player will dispose");
  //   });
  // };
  if (!data || isLoading || error) return null;

  return (
    <Fragment>
      <Container fluid>
        <div className="tv-show-detail">
          <div
            className="overlay-wrapper iq-main-slider"
            style={{
              background: `linear-gradient(to right, rgba(31, 36, 33, 1) 5%, rgba(27, 38, 52, 0.7) 100%), url(https://image.tmdb.org/t/p/original/${data.backdrop_path}}`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="banner-caption">
              <Row>
                <Col lg="3" md="5">
                  <Image
                    src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                    rounded
                  />
                </Col>
                <Col lg="9" md="7" className="pe-5">
                  <div className="trending-info ">
                    <h1 className="texture-text big-font text-uppercase mt-2">
                      {data.title || data.name}
                    </h1>

                    <ul className="p-0 m-0 list-inline d-flex flex-wrap movie-tag  mb-3">
                      {data?.genres.map((item, index) => {
                        return (
                          <li className="trending-list" key={index}>
                            <Link
                              to="/view-all"
                              className="text-primary text-uppercase font-size-18"
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="d-flex flex-wrap align-items-center gap-3 font-size-20 fw-500 text-white">
                        <span>
                          {dayjs(data.release_date).format("MMM DD, YYYY")}
                        </span>
                        <span>{formatRuntime(data.runtime)}</span>
                      </div>
                    </div>

                    {/* <div className="ratting-start p-0 mb-4 list-inline text-warning d-flex align-items-center justify-content-left">
                      <RatingStar
                        count="4"
                        count1="1"
                        starColor="text-warning"
                      />
                      <span className="text-white ms-4 me-1">
                        {data.vote_average}
                      </span>
                    </div> */}
                    <p className="line-count-5 my-3 me-5">{data.overview}</p>

                    <div className="d-flex align-items-center flex-wrap gap-4 mb-4">
                      <ul className="list-inline p-0 m-0 share-icons music-play-lists mb-n2 mx-n2">
                        <li className="share">
                          <span>
                            <i className="fa-solid fa-share-nodes"></i>
                          </span>
                          <div className="share-box">
                            <svg
                              width="15"
                              height="40"
                              viewBox="0 0 15 40"
                              className="share-shape"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                fill="#191919"
                              ></path>
                            </svg>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="share-ico">
                                <i className="fa-brands fa-facebook-f"></i>
                              </Link>
                              <Link to="#" className="share-ico">
                                <i className="fa-brands fa-twitter"></i>
                              </Link>
                              <Link to="#" className="share-ico">
                                <i className="fa-solid fa-link"></i>
                              </Link>
                            </div>
                          </div>
                        </li>{" "}
                        <li>
                          <span>
                            <i className="fa-solid fa-heart"></i>
                          </span>
                        </li>{" "}
                        <li>
                          <span>
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </li>
                      </ul>
                      {/* <div className="movie-detail-select">
                <Form.Select name="movieselect" className="form-select ">
                  <option value="1">Playlist</option>
                  <option value="2">Zombie Island</option>
                  <option value="3">Sand Dust</option>
                  <option value="4">Jumbo Queen</option>
                </Form.Select>
              </div> */}
                    </div>
                  </div>
                </Col>

                {/* <div className="position-relative my-4">
              <Link to="/episodes" className="d-flex align-items-center gap-3">
                <div className="play-button">
                  <i className="fa-solid fa-play"></i>
                </div>
                <h4 className="text-white fw-bold m-0">Watch latest Episode</h4>
              </Link>
            </div> */}

                {/* <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
              <li className="iq-tag-title text-primary mb-0">
                <i className="fa fa-tags" aria-hidden="true"></i> Tags:{" "}
              </li>
              {shows.tags.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to="/view-all" className="title text-capitalize">
                      {item}
                    </Link>
                    <span className="text-secondary">,</span>
                  </li>
                );
              })}
            </ul> */}
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <div className="cast-tabs section-padding-top">
        <Container fluid>
          <div className="content-details trending-info g-border iq-rtl-direction">
            <Tab.Container defaultActiveKey="first">
              <Nav className="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 ">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    variant=" d-flex align-items-center"
                    id="nav-cast-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-cast"
                    type="button"
                    role="tab"
                    aria-controls="nav-cast"
                    aria-selected="true"
                  >
                    Cast
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    variant=""
                    id="nav-crew-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-crew"
                    type="button"
                    role="tab"
                    aria-controls="nav-crew"
                    aria-selected="false"
                  >
                    Crew
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane
                  className=" fade show"
                  eventKey="first"
                  id="nav-cast"
                  role="tabpanel"
                  aria-labelledby="nav-cast-tab"
                >
                  <Swiper
                    slidesPerView={5}
                    loop={false}
                    modules={[Navigation]}
                    tag="ul"
                    className="position-relative swiper-card list-inline"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      576: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1025: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                      1500: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {shows.cast.map((item, index) => {
                      return (
                        <SwiperSlide key={index} as="li">
                          <Row className="cast-images m-0 align-items-center position-relative">
                            <Col className="col-4 img-box p-0">
                              <img
                                src={item.thumbnail}
                                alt="cast-1"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </Col>
                            <Col className="col-8 block-description">
                              <h6 className="iq-title">
                                <Link to="/cast-detail">{item.title}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{item.as}</small>
                              </div>
                            </Col>
                          </Row>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-crew"
                  eventKey="second"
                  role="tabpanel"
                  aria-labelledby="nav-crew-tab"
                >
                  <Swiper
                    slidesPerView={5}
                    loop={false}
                    modules={[Navigation]}
                    tag="ul"
                    className="position-relative swiper-card list-inline"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      576: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1025: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                      1500: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {shows.crew.map((item, index) => {
                      return (
                        <SwiperSlide key={index} as="li">
                          <Row className="cast-images m-0 align-items-center position-relative">
                            <div className="col-4 img-box p-0">
                              <img
                                src={item.thumbnail}
                                alt="cast-1"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="col-8 block-description">
                              <h6 className="iq-title">
                                <Link to="/cast-detail">{item.title}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{item.as}</small>
                              </div>
                            </div>
                          </Row>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </div>
      <MoviesRecommendedForYou />
      <RelatedMovies />
      <RelatedVideos />
      <UpcomingMovies />
    </Fragment>
  );
});

MovieDetail.displayName = "MovieDetail";
export default MovieDetail;
