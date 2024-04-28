import { Fragment, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { generateImgPath } from "../../services";
const imagePath = generateImgPath("/assets/images/pages/01.webp");

const BreadCrumbWidget = memo(({ title, subtitle, bannerImgUrl }) => {
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
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
