import { Fragment, memo } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import { BreadcrumbWidget } from "../../common";
import { CastCard } from "../../common";
import { useMovieDetail } from "../../hooks";
import { tmdbImgPath, personDetailPath } from "../../services";
import { useEnterExit } from "../../utilities/usePage";

export const ListPage = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = useMovieDetail(
    {
      id: params?.id,
      queryParams: {
        append_to_response: "credits",
      },
    },
    [params?.id]
  );

  useEnterExit();

  if (!data || isLoading || error) return null;
  const { credits } = data;
  const { cast, crew } = credits;

  return (
    <Fragment>
      <BreadcrumbWidget
        title={`${data.title}`}
        subtitle="Cast & Crew"
        bannerImgUrl={tmdbImgPath("original", data.backdrop_path)}
      />
      <Container className="mt-5">
        <div className="content-details trending-info g-border iq-rtl-direction">
          <Tab.Container defaultActiveKey="first">
            <Nav className="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 ">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  variant=" d-flex align-items-center"
                  id="nav-cast-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-cast"
                  type="button"
                  role="tab"
                  aria-controls="nav-cast"
                  aria-selected="true"
                >
                  Cast
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  variant=""
                  id="nav-crew-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-crew"
                  type="button"
                  role="tab"
                  aria-controls="nav-crew"
                  aria-selected="false"
                >
                  Crew
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane
                className=" fade show"
                eventKey="first"
                id="nav-cast"
                role="tabpanel"
                aria-labelledby="nav-cast-tab"
              >
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                  {cast.map((i, index) => (
                    <Col key={index}>
                      <CastCard
                        title={i.name}
                        category={i.character}
                        image={tmdbImgPath("w185", i.profile_path)}
                        link={personDetailPath(i.id)}
                      />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane
                className=" fade"
                id="nav-crew"
                eventKey="second"
                role="tabpanel"
                aria-labelledby="nav-crew-tab"
              >
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
                  {crew.map((i, index) => (
                    <Col key={index}>
                      <CastCard
                        title={i.name}
                        category={i.department}
                        image={tmdbImgPath("w185", i.profile_path)}
                        link={personDetailPath(i.id)}
                      />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </Fragment>
  );
});

ListPage.displayName = "ListPage";
export default ListPage;

/*
https://api.themoviedb.org/3/movie/{movie_id}/credits
https://api.themoviedb.org/3/tv/{series_id}/credits
*/
