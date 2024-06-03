import { Fragment, memo } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const TopTenCard = memo(
  ({ link, imagePath, countValue, isLoading = false }) => {
    if (isLoading) return <LoadingState countValue={countValue} />;

    return (
      <Fragment>
        <div className="iq-top-ten-block">
          <div className="block-image position-relative">
            <div className="img-box">
              <Link className="overly-images" to={link}>
                <img
                  src={imagePath}
                  alt="movie-card"
                  className="img-fluid object-cover"
                />
              </Link>
              <span className="top-ten-numbers texture-text">{countValue}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
);

const LoadingState = ({ countValue }) => (
  <Fragment>
    <div className="iq-top-ten-block">
      <div className="block-image position-relative">
        <div className="img-box">
          <Skeleton className="img-fluid object-cover" height={264} />
          <span className="top-ten-numbers texture-text">{countValue}</span>
        </div>
      </div>
    </div>
  </Fragment>
);

TopTenCard.displayName = "TopTenCard";
export default TopTenCard;
