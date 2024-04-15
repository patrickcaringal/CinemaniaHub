import { memo } from "react";
import { SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { SectionSlider } from "../../common";
import { tmdbImgPath, personDetailPath } from "../../services";

const Casts = memo(({ data, viewAllLink = "" }) => {
  return (
    <div className="cast-tabs mt-5">
      <div className="content-details trending-info g-border iq-rtl-direction">
        <SectionSlider
          className="position-relative swiper-card list-inline"
          title="Cast"
          list={data?.slice(0, 10)}
          slidesPerView={4}
          link={viewAllLink}
        >
          {(item) => (
            // Cast Card component
            <SwiperSlide key={item.id} as="li">
              <Link to={personDetailPath(item.id)}>
                <Row className="cast-images m-0 align-items-center position-relative">
                  <Col className="col-4 img-box p-0">
                    <img
                      src={tmdbImgPath("w185", item.profile_path)}
                      alt="cast-1"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </Col>
                  <Col className="col-8 block-description">
                    <h6 className="iq-title">{item.original_name}</h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">{item.character}</small>
                    </div>
                  </Col>
                </Row>
              </Link>
            </SwiperSlide>
          )}
        </SectionSlider>
      </div>
    </div>
  );
});

Casts.displayName = "Casts";
export default Casts;
