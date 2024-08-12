import { memo } from "react";

import { Row, Col } from "react-bootstrap";
import { groupBy } from "lodash";

import { CastCard } from "../../common";
import { tmdbImgPath, personDetailPath } from "../../services";
import CreditTab from "./CreditTab";

const Credits = memo(({ cast, crew }) => {
  const tabs = [
    {
      id: "cast",
      label: "Cast",
      data: cast,
    },
    {
      id: "crew",
      label: "Crew",
      data: crew,
      // custom render, grouped by department
      render: () => {
        const departments = groupBy(crew, "department");
        return Object.entries(departments).map(([key, value]) => (
          <>
            <p className="text-capitalize fs-4 fw-bold">{key}</p>
            <Row
              key={key}
              xl="6"
              md="3"
              sm="2"
              sx="2"
              className="row row-cols-1 mb-3"
            >
              {value.map((i) => (
                <Col key={i.id} className="d-flex">
                  <CastCard
                    title={i.name}
                    category={i.department}
                    image={tmdbImgPath("w185", i.profile_path)}
                    link={personDetailPath(i.id)}
                  />
                </Col>
              ))}
            </Row>
          </>
        ));
      },
    },
  ];

  return <CreditTab tabs={tabs} />;
});

Credits.displayName = "Credits";
export default Credits;
