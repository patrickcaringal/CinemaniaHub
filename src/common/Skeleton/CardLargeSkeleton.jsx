import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

// NOTE: usecases Show, Recommendation card
const CardLargeSkeleton = () => (
  <Fragment>
    <div className="iq-card">
      <div className="block-images position-relative">
        <div className="img-box">
          <Skeleton className="img-fluid object-cover" height={264} />
        </div>
      </div>
    </div>
  </Fragment>
);

CardLargeSkeleton.displayName = "CardLargeSkeleton";
export default CardLargeSkeleton;
