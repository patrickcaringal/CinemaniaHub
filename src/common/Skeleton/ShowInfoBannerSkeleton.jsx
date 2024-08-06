import { Row, Col, Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const ShowInfoBannerSkeleton = () => (
  <Container fluid>
    <div className="tv-show-detail">
      <div
        className="overlay-wrapper iq-main-slider"
        style={{
          background: `linear-gradient(to right, rgba(31, 36, 33, 1) 5%, rgba(27, 38, 52, 0.7) 100%), url("/assets/images/transparent-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="banner-caption">
          <Row>
            <Col lg="3" md="5">
              <Skeleton height={408} />
            </Col>
            <Col lg="9" md="7" className="pe-5">
              <div className="trending-info ">
                <h1 className="texture-text big-font text-uppercase mt-2">
                  <Skeleton />
                </h1>

                <ul className="p-0 m-0 list-inline d-flex flex-wrap movie-tag mb-3">
                  <Skeleton width={200} />
                </ul>

                <div className="ratting-start p-0 mb-4 list-inline text-warning d-flex align-items-center justify-content-left">
                  <Skeleton width={111} />
                </div>

                <div className="d-flex flex-wrap align-items-center mb-3">
                  <div className="d-flex flex-wrap align-items-center gap-3 font-size-20 fw-500 text-white">
                    <span>
                      <Skeleton width={111} />
                    </span>
                    <span>
                      <Skeleton width={111} />
                    </span>
                  </div>
                </div>
                <p>
                  <em>
                    <Skeleton width={200} />
                  </em>
                </p>
                <p className="h6">
                  <Skeleton width={111} />
                </p>
                <p className="line-count-5 my-3 me-5">
                  <Skeleton count={3} />
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </Container>
);

ShowInfoBannerSkeleton.displayName = "ShowInfoBannerSkeleton";
export default ShowInfoBannerSkeleton;
