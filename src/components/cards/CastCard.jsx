import { Fragment, memo } from "react";

import { Link } from "react-router-dom";
import { personImageFallback } from "../../services";

const CastCard = memo((props) => {
  return (
    <Fragment>
      <div className="iq-cast" style={{ width: 185, height: 278 }}>
        <img
          src={props.image}
          className="rounded "
          alt={`cast-${props.title}`}
          loading="lazy"
          onError={(ev) => {
            ev.target.src = personImageFallback;
          }}
        />
        <div className="card-img-overlay iq-cast-body">
          <h6 className="cast-title fw-500">
            <Link to="/cast-detail">{props.title}</Link>
          </h6>
          <span className="cast-subtitle">{props.category}</span>
        </div>
      </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
