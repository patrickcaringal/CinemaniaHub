import { Fragment, memo } from "react";

import { Link } from "react-router-dom";
import { personImageFallback } from "../../services";

const CastCard = memo(({ image, title, category, link = "/cast-detail" }) => {
  return (
    <Fragment>
      <div className="iq-cast" style={{ width: 185, height: 278 }}>
        <Link to={link}>
          <img
            src={image}
            className="rounded "
            alt={`cast-${title}`}
            loading="lazy"
            onError={(ev) => {
              ev.target.src = personImageFallback;
            }}
          />
          <div className="card-img-overlay iq-cast-body">
            <h6 className="cast-title fw-500">{title}</h6>
            <small className="text-white">{category}</small>
          </div>
        </Link>
      </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
