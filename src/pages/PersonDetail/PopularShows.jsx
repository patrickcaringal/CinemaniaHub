import { memo } from "react";
import { Col, Row } from "react-bootstrap";

import { CardStyle } from "../../common";
import { tmdbImgPath, detailPath } from "../../services";
import { formatDate } from "../../helpers";

const PopularShows = memo(({ data }) => {
  return (
    <div className="mt-5">
      <h5 className="main-title text-capitalize mb-4">Popular Shows</h5>
      <div className="card-style-grid mb-5">
        <Row xl="5" sm="12" className=" row-cols-1">
          {data.map((i, index) => {
            return (
              <Col className="mb-4" key={index}>
                <CardStyle
                  image={tmdbImgPath("w342", i.poster_path)}
                  title={i.title || i.name}
                  subtitle={formatDate(i.release_date)}
                  link={detailPath("movie", i.id)}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
});

PopularShows.displayName = "PopularShows";
export default PopularShows;
