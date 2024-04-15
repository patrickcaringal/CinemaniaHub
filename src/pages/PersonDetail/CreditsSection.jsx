import { memo } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

import { tmdbImgPath, detailPath } from "../../services";
import {
  formatDate,
  sortByReleaseDesc,
  sortByFirstAirDateDesc,
} from "../../helpers";

const CreditsSection = memo(({ movies, tvShows }) => {
  return (
    <div className="content-details trending-info">
      <h5 className="main-title text-capitalize mb-4">Credits</h5>
      <Tab.Container defaultActiveKey="first">
        <Nav
          as="ul"
          className="nav-underline nav-pills d-flex align-items-center text-center mb-5 gap-5"
        >
          <Nav.Item as="div">
            <Nav.Link
              eventKey="first"
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="div">
            <Nav.Link
              eventKey="second"
              id="nav-movies-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-movies"
              type="button"
              role="tab"
              aria-controls="nav-movies"
              aria-selected="true"
            >
              TV Shows
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane className="fadeInUp animated" eventKey="first">
            <div className="description-content">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {movies
                      .sort(sortByReleaseDesc)
                      .slice(0, 50)
                      .map((i, index) => {
                        return (
                          <tr key={index}>
                            <td className="w-15">
                              <Link to={detailPath(i.media_type, i.id)}>
                                <img
                                  src={tmdbImgPath("w92", i.poster_path)}
                                  alt="image-icon"
                                />
                              </Link>
                            </td>
                            <td>
                              <div className="font-size-18 d-flex gap-2 text-white fw-500">
                                <span className="text-capitalize">
                                  {i.title}
                                </span>
                                <span className="fw-normal text-body">
                                  as {i.character || "Self"}
                                </span>
                              </div>
                              <span className="font-size-14 text-white">
                                {formatDate(i.release_date)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane className="fadeInUp animated" eventKey="second">
            <div className="description-content">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {tvShows
                      .sort(sortByFirstAirDateDesc)
                      .slice(0, 50)
                      .map((i, index) => {
                        return (
                          <tr key={index}>
                            <td className="w-15">
                              <Link to={detailPath(i.media_type, i.id)}>
                                <img
                                  src={tmdbImgPath("w92", i.poster_path)}
                                  alt="image-icon"
                                />
                              </Link>
                            </td>
                            <td>
                              <div className="font-size-18 d-flex gap-2 text-white fw-500">
                                <span className="text-capitalize">
                                  {i.name}
                                </span>
                                <span className="fw-normal text-body">
                                  as {i.character || "Self"}
                                </span>
                              </div>
                              <span className="font-size-14 text-white">
                                {formatDate(i.release_date)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
});

CreditsSection.displayName = "CreditsSection";
export default CreditsSection;
