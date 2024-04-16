import { Fragment, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const BreadCrumbWidget = memo(({ title, bannerImgUrl }) => {
  return (
    <Fragment>
      <div
        className="iq-breadcrumb"
        style={{
          background: `linear-gradient(to right, rgba(31, 36, 33, 1) 5%, rgba(27, 38, 52, 0.7) 100%), url(${bannerImgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav className="text-center">
                <h2 className="title text-capitalize">{title}</h2>
                <p className="text-center display-5">
                  <strong>Cast & Crew</strong>
                </p>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
