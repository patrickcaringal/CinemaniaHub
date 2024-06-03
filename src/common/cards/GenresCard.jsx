import { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const GenresCard = memo(({ image, title, isLoading = false }) => {
  if (isLoading) return <LoadingState />;

  return (
    <Fragment>
      <div className="iq-card-geners card-hover-style-two">
        <div className="block-images position-relative w-100">
          <div className="img-box rounded position-relative">
            <img
              src={image}
              alt="geners-img"
              className="img-fluid object-cover w-100 rounded"
            />
            {title && (
              <div className="blog-description">
                <h6 className="mb-0 iq-title">
                  <Link
                    to={{
                      pathname: "/view-all",
                    }}
                    className="text-decoration-none text-capitalize line-count-2 p-2"
                  >
                    {title}
                  </Link>
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

const LoadingState = () => (
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

GenresCard.displayName = "GenresCard";
export default GenresCard;
