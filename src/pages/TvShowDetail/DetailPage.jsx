import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container, Image } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//components
import Collections from "./Collections";
import Recommendation from "./Recommendation";
import ImagesSection from "./GenreSlider";
import Casts from "./Casts";
import RatingStar from "../../components/rating-star";

//function

//utilites
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { useTvShowDetail } from "../../hooks";

const MovieDetail = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = useTvShowDetail(
    {
      id: params?.id,
      queryParams: {
        append_to_response: "credits,collections,images",
        include_image_language: "en,null",
      },
    },
    [params?.id]
  );

  useEnterExit();

  if (!data || isLoading || error) return null;

  const { credits, images, seasons } = data;
  const { cast } = credits;
  const { backdrops } = images;

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
                  <div className="trending-info">
                    <h1 className="texture-text big-font text-uppercase mt-2">
                      {data.title || data.name}
                    </h1>

                    <ul className="p-0 m-0 list-inline d-flex flex-wrap movie-tag mb-3">
                      {data?.genres.map((item, index) => {
                        return (
                          <li className="trending-list" key={index}>
                            <Link to="/view-all" className="">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="ratting-start p-0 mb-4 list-inline text-warning d-flex align-items-center justify-content-left">
                      <RatingStar
                        count="4"
                        count1="1"
                        starColor="text-warning"
                      />
                      <span className="text-white ms-4 me-1">
                        {data.vote_average}
                      </span>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="d-flex flex-wrap align-items-center gap-3 font-size-20 fw-500 text-white">
                        <span>{data.number_of_seasons} Seasons</span>
                        {/* <span>{data.number_of_episodes} Episodes</span> */}
                      </div>
                    </div>

                    {!!data.tagline && (
                      <p>
                        <em>{data.tagline}</em>
                      </p>
                    )}

                    <p className="h6">
                      <strong>Overview</strong>
                    </p>
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

      <Casts data={cast?.slice(0, 10)} />

      {!!seasons.length && (
        <Collections data={seasons.filter((i) => !!i.season_number)} />
      )}

      {!!backdrops.length && (
        <ImagesSection
          data={backdrops
            .sort((a, b) => {
              return b.vote_count - a.vote_count;
            })
            .slice(0, 10)}
        />
      )}

      <Recommendation id={params?.id} />
    </Fragment>
  );
});

MovieDetail.displayName = "MovieDetail";
export default MovieDetail;
