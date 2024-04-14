import { Fragment, memo } from "react";

//react bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

//function
import { generateImgPath } from "../../StaticData/data";

//img
const imagePath = generateImgPath("/assets/images/pages/01.webp");

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
                <Breadcrumb
                  className="main-bg"
                  listProps={{
                    className: "text-center justify-content-center",
                  }}
                >
                  <Breadcrumb.Item> Cast & Crew</Breadcrumb.Item>
                </Breadcrumb>
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
