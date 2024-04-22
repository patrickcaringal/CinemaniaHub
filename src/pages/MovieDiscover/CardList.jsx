import { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CardStyle } from "../../common";
import { tmdbImgPath, detailPath } from "../../services";

const CardList = memo(({ data }) => {
  return (
    <Container fluid>
      <div className="card-style-grid">
        <Row className="row row-cols-xl-5 row-cols-md-2 row-cols-1">
          {data.map((i, index) => (
            <Col key={index} className="mb-5">
              <CardStyle
                image={tmdbImgPath("w342", i.poster_path)}
                title={i.title || i.name}
                subtitle={i?.genres?.join(", ")}
                link={detailPath("movie", i.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
});

CardList.displayName = "CardList";
export default CardList;
