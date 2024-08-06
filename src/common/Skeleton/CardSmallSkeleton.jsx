import { SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// NOTE: usecases Cast card
const CardSmallSkeleton = () => (
  <SwiperSlide as="li">
    <Link to="">
      <Row className="cast-images m-0 align-items-center position-relative">
        <Col className="col-4 img-box p-0">
          <Skeleton height={120} />
        </Col>
        <Col className="col-8 block-description">
          <h6 className="iq-title">
            <Skeleton />
          </h6>
          <div className="video-time d-flex align-items-center my-2">
            <small className="text-white">
              <Skeleton width={111} />
            </small>
          </div>
        </Col>
      </Row>
    </Link>
  </SwiperSlide>
);

CardSmallSkeleton.displayName = "CardSmallSkeleton";
export default CardSmallSkeleton;
