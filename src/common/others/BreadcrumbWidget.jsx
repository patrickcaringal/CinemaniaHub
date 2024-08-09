import { Fragment, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

import { generateImgPath } from "../../services";
const imagePath = generateImgPath("/assets/images/pages/01.webp");

const BreadCrumbWidget = memo(
  ({ title, subtitle, bannerImgUrl, isLoading }) => {
    if (isLoading) return <BreadCrumbWidgetSkeleton />;

    return (
      <Fragment>
        <div
          className="iq-breadcrumb"
          style={{
            background: `linear-gradient(to right, rgba(31, 36, 33, 1) 5%, rgba(27, 38, 52, 0.7) 100%), url(${
              (bannerImgUrl, imagePath)
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container fluid>
            <Row className="align-items-center">
              <Col sm="12">
                <nav className="text-center">
                  <h2 className="title text-capitalize">{title}</h2>
                  {subtitle && (
                    <p className="text-center display-5">
                      <strong>{subtitle}</strong>
                    </p>
                  )}
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
);

const BreadCrumbWidgetSkeleton = ({ bannerImgUrl }) => {
  return (
    <Fragment>
      <div
        className="iq-breadcrumb"
        style={{
          background: `linear-gradient(to right, rgba(31, 36, 33, 1) 5%, rgba(27, 38, 52, 0.7) 100%), url(${
            (bannerImgUrl, imagePath)
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav className="text-center">
                <h2 className="title text-capitalize">
                  <Skeleton width={500} />
                </h2>
                <p className="text-center display-5">
                  <Skeleton width={300} />
                </p>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
