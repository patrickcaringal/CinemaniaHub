import { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CardStyle } from "../../common";
import { tmdbImgPath, detailPath } from "../../services";
import { formatDate } from "../../helpers";

const CardList = memo(({ data }) => {
  // i.release_date
  return (
    <Container fluid>
      <div className="card-style-grid">
        <Row className="row row-cols-xl-5 row-cols-md-2 row-cols-1">
          {data.map((i, index) => {
            const releaseDate = i.release_date
              ? ` (${formatDate(i.release_date, "YYYY")})`
              : "";
            const title = `${i.title}${releaseDate}`;

            return (
              <Col key={index} className="mb-5">
                <CardStyle
                  image={tmdbImgPath("w342", i.poster_path)}
                  title={title}
                  subtitle={i?.genres?.join(", ")}
                  link={detailPath("movie", i.id)}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
});

CardList.displayName = "CardList";
export default CardList;
