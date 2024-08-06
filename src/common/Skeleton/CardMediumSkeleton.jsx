import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

// NOTE: usecases Image, Genre card
const CardMediumSkeleton = () => (
  <Fragment>
    <div className="iq-card-geners card-hover-style-two">
      <div className="block-images position-relative w-100">
        <div className="img-box rounded position-relative">
          <Skeleton height={168} />
        </div>
      </div>
    </div>
  </Fragment>
);

CardMediumSkeleton.displayName = "CardMediumSkeleton";
export default CardMediumSkeleton;
