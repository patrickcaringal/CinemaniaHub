import { memo } from "react";

import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import { CastCard } from "../../common";
import { tmdbImgPath, personDetailPath } from "../../services";

const CreditTab = memo(({ tabs }) => {
  if (!tabs.length) return null;

  const defaultActiveKey = `tab${tabs[0].id}`; // 1st item in tabs array
  const getEventKey = (id) => `tab${id}`;

  const renderCredit = (data) => (
    <Row xl="6" md="3" sm="2" sx="2" className="row row-cols-1">
      {data.map((i, index) => (
        <Col key={index} className="d-flex">
          <CastCard
            title={i.name}
            category={i.character}
            image={tmdbImgPath("w185", i.profile_path)}
            link={personDetailPath(i.id)}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className="mt-5">
      <div className="content-details trending-info g-border iq-rtl-direction">
        <Tab.Container defaultActiveKey={defaultActiveKey}>
          <Nav className="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 ">
            {tabs.map((t) => (
              <Nav.Item key={t.id}>
                <Nav.Link
                  eventKey={getEventKey(t.id)}
                  variant="d-flex align-items-center"
                  id={`nav-${t.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${t.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${t.id}`}
                  // aria-selected="true"
                >
                  {t.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {tabs.map(({ id, data, render: customRender }) => (
              <Tab.Pane
                key={id}
                className="fade show"
                eventKey={getEventKey(id)}
                id={`nav-${id}`}
                role="tabpanel"
                aria-labelledby={`nav-${id}-tab`}
              >
                {customRender ? customRender() : renderCredit(data)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </Container>
  );
});

CreditTab.displayName = "CreditTab";
export default CreditTab;
