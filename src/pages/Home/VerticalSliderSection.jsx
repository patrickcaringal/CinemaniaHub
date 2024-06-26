import { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { tmdbImgPath, detailPath } from "../../services";

const VerticalSliderSection = memo(({ data = [], error, isLoading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (isLoading || error) return null;

  return (
    <Fragment>
      <div className="verticle-slider section-padding-bottom d-none d-md-block">
        <div className="slider">
          <div className="slider-flex position-relative">
            <div className="slider--col position-relative">
              <div
                className="vertical-slider-prev swiper-button"
                tabIndex="0"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-b130b4e10e1468117"
              >
                <i className="iconly-Arrow-Up-2 icli"></i>
              </div>
              <div className="slider-thumbs" data-swiper="slider-thumbs">
                <div
                  className="swiper-container"
                  data-swiper="slider-thumbs-inner"
                >
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={3}
                    navigation={{
                      nextEl: ".vertical-slider-next",
                      prevEl: ".vertical-slider-prev",
                    }}
                    loop={true}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    direction="vertical"
                    className="swiper-wrapper top-ten-slider-nav"
                  >
                    {data.map((i) => (
                      <SwiperSlide
                        key={i.id + "tranding-thumb"}
                        tag="li"
                        className="swiper-slide swiper-bg"
                      >
                        <div className="block-images position-relative">
                          <div className="img-box slider--image">
                            <img
                              src={tmdbImgPath("original", i.backdrop_path)}
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <Link to={detailPath(i.media_type, i.id)}>
                                {i.title || i.name}
                              </Link>
                            </h6>
                            {/* <div className="movie-time d-flex align-items-center my-2">
                              <span className="text-body">{i.movieTime}</span>
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="slider-next btn-verticle">
                    <i className="ri-arrow-down-s-line vertical-aerrow"></i>
                  </div>
                </div>
              </div>
              <div
                className="vertical-slider-next swiper-button"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-b130b4e10e1468117"
              >
                <i className="iconly-Arrow-Down-2 icli"></i>
              </div>
            </div>
            <div className="slider-images" data-swiper="slider-images">
              <Swiper
                spaceBetween={10}
                modules={[Navigation, Thumbs]}
                effect="fade"
                direction="vertical"
                className="swiper-container"
                loop={true}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
              >
                {data.map((i) => (
                  <SwiperSlide
                    key={i.id + "tranding-main"}
                    tag="li"
                    className="swiper-slide"
                  >
                    <div className="slider--image block-images">
                      <img
                        src={tmdbImgPath("original", i.backdrop_path)}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          {i.genres.map((genre) => (
                            <li
                              key={genre}
                              className="position-relative text-capitalize font-size-14 letter-spacing-1"
                            >
                              <Link
                                to="/view-all"
                                className="text-white text-decoration-none"
                              >
                                {genre}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <h2 className="iq-title mb-3">
                          <Link to={detailPath(i.media_type, i.id)}>
                            {i.title || i.name}
                          </Link>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
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
                          </div>
                          {/* <span className="text-body">{i.movieTime}</span> */}
                        </div>
                        <p className="mt-0 mb-3 line-count-3">{i.overview}</p>
                        <div className="iq-button">
                          <Link
                            to={detailPath(i.media_type, i.id)}
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play"></i>
                          </Link>
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

VerticalSliderSection.displayName = "VerticalSliderSection";
export default VerticalSliderSection;
