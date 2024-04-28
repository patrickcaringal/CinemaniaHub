import { Fragment, memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { usePersonDetail } from "../../hooks";

import { tmdbImgPath } from "../../services";
import { formatDate, isMovie, sortByVote } from "../../helpers";

import PopularShows from "./PopularShows";
import CreditsSection from "./CreditsSection";

const DetailPage = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = usePersonDetail(
    {
      id: params?.id,
      queryParams: {
        append_to_response: "combined_credits",
        // include_image_language: "en,null",
      },
      // combined_credits
    },
    [params?.id]
  );

  if (!data || isLoading || error) return null;

  const isActor = data.known_for_department === "Acting";

  const { combined_credits } = data;
  const { cast } = combined_credits;

  const movieCredits = cast.filter(
    (i) => isMovie(i.media_type) && !!i.release_date && !!i.vote_count
  );

  const tvCredits = cast.filter(
    (i) => !isMovie(i.media_type) && !!i.first_air_date && !!i.vote_count
  );

  const knownForCredits = cast.sort(sortByVote).slice(0, 5);

  return (
    <Fragment>
      <div className="section-padding">
        <Container fluid>
          <Row>
            <Col lg="3" md="5">
              <div className="cast-box position-relative">
                <img
                  src={tmdbImgPath("h632", data.profile_path)}
                  alt="person"
                  className="img-fluid object-cover w-100"
                  loading="lazy"
                />
              </div>
              <h5 className="mt-5 mb-4 text-white fw-500">Personal Details</h5>
              <h6 className="font-size-18 text-white fw-500">Known For :</h6>
              <div className="seperator d-flex align-items-center flex-wrap mb-3">
                <span>{data.known_for_department}</span>
              </div>
              <h6 className="font-size-18 text-white fw-500">Born :</h6>
              <div className="seperator d-flex align-items-center flex-wrap mb-3">
                <span>{formatDate(data.birthday)}</span>
                <span className="circle"></span>
                <span>{data.place_of_birth}</span>
              </div>
            </Col>

            <Col lg="9" md="7">
              <h4 className="fw-500 ">{data.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: data.biography }}></p>
              <PopularShows data={knownForCredits} />
              {isActor && (
                <CreditsSection movies={movieCredits} tvShows={tvCredits} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

DetailPage.displayName = "DetailPage";
export default DetailPage;
