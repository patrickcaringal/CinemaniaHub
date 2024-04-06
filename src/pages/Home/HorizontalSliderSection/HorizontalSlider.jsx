import { memo, Fragment, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// components
import CustomButton from "./CustomButton";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

const HorizontalSlider = memo(({ data = [], error, isLoading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (isLoading || error) return null;

  return (
    <Fragment>
      <div className="iq-banner-thumb-slider mt-5">
        <div className="slider">
          <div className="position-relative slider-bg d-flex justify-content-end">
            <div className="position-relative my-auto">
              <div
                className="horizontal_thumb_slider"
                data-swiper="slider-thumbs-ott"
              >
                <div className="banner-thumb-slider-nav">
                  <Swiper
                    tag="ul"
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    direction="horizontal"
                    navigation={{
                      prevEl: ".slider-prev",
                      nextEl: ".slider-next",
                    }}
                    spaceBetween={24}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                      0: {
                        direction: "horizontal",
                        slidesPerView: 1,
                      },
                      768: {
                        direction: "horizontal",
                        slidesPerView: 2,
                      },
                    }}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="swiper-horizontal swiper-container mb-0"
                  >
                    {data.map((i) => (
                      <SwiperSlide key={i.id} className="swiper-bg">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                            <div className="block-description ps-3">
                              <h6 className="iq-title fw-500 mb-0">
                                {i.title || i.name}
                              </h6>
                              <span className="fs-12 line-count-1">
                                {i.genres.join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="slider-prev swiper-button">
                    <i className="iconly-Arrow-Left-2 icli"></i>
                  </div>
                  <div className="slider-next swiper-button">
                    <i className="iconly-Arrow-Right-2 icli"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-images" data-swiper="slider-images-ott">
              <Swiper
                tag="ul"
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                modules={[Navigation, Thumbs]}
                watchSlidesProgress={true}
                allowTouchMove={false}
                loop={true}
                className="swiper-container"
              >
                {data.map((i) => (
                  <SwiperSlide key={i.title || i.name} className="p-0">
                    <div className="slider--image block-images">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${i.backdrop_path}`}
                        loading="lazy"
                        alt="banner"
                      />
                    </div>
                    <div className="description">
                      <div className="row align-items-center h-100">
                        <div className="col-lg-6 col-md-12">
                          <div className="slider-content">
                            <div className="d-flex align-items-center RightAnimate mb-3">
                              {/* <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                                Pg
                              </span> */}
                              <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                {i.genres.map((genre) => (
                                  <li
                                    key={genre}
                                    className="position-relative text-capitalize font-size-14 letter-spacing-1"
                                  >
                                    <Link
                                      to="/view-all"
                                      className="text-decoration-none"
                                    >
                                      {genre}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <h1 className="texture-text big-font letter-spacing-1 line-count-3 text-capitalize RightAnimate-two">
                              {i.title || i.name}
                            </h1>
                            <p className="line-count-3 RightAnimate-two">
                              {i.overview}
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                              <div className="slider-ratting d-flex align-items-center">
                                <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                  <li>
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>
                                  </li>
                                </ul>
                                <span className="text-white ms-2 font-size-14 fw-500">
                                  4.3/5
                                </span>
                                {/* <span className="ms-2">
                                  <img
                                    src={logo}
                                    alt="imdb logo"
                                    className="img-fluid"
                                  />
                                </span> */}
                              </div>
                              {/* <span className="font-size-14 fw-500">
                                2 Hr : 6 Mins
                              </span> */}
                              {/* <div className="text-primary font-size-14 fw-500 text-capitalize">
                                genres:{" "}
                                {i.genre_ids.map((genre) => (
                                  <Link
                                    key={genre}
                                    to="/view-all"
                                    className="text-decoration-none ms-1"
                                  >
                                    {genre}
                                  </Link>
                                ))}
                              </div> */}
                              {/* <div className="text-primary font-size-14 fw-500 text-capitalize">
                                Starting:{" "}
                                <Link
                                  to="/cast-detail"
                                  className="text-decoration-none ms-1"
                                >
                                  Jeffrey Silver
                                </Link>
                              </div> */}
                            </div>
                          </div>
                          <CustomButton
                            buttonTitle="play now"
                            link="/movies-detail"
                            linkButton="false"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

HorizontalSlider.displayName = HorizontalSlider;
export default HorizontalSlider;
