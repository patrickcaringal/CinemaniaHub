import { memo } from "react";

import { Row, Col } from "react-bootstrap";

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
      // custom render
      render: () => (
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
      ),
    },
  ];

  return <CreditTab tabs={tabs} />;
});

Credits.displayName = "Credits";
export default Credits;
