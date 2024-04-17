import { Fragment, memo, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";

import { CardStyle } from "../../common";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

import { useDiscover } from "../../hooks";
import { useEnterExit } from "../../utilities/usePage";
import { detailPath } from "../../services";

import Toolbar from "./Toolbar";

const initialValues = {
  sort_by: "popularity.desc",
  "release_date.gte": undefined,
  "release_date.lte": undefined,
  with_genres: [],
};

const ViewAll = memo(() => {
  const [searchQuery, setSearchQuery] = useState(
    `sort_by=${initialValues.sort_by}`
  );
  useEnterExit();

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const handleSubmit = () => {
    const { sort_by, with_genres } = formik.values;
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", sort_by);
    if (with_genres.length > 0)
      searchParams.append("with_genres", with_genres.join("|"));

    setSearchQuery(searchParams.toString());
  };

  const { data, error, isLoading } = useDiscover(
    {
      entity: "movie",
      queryParams: {
        sort_by: formik.values.sort_by,
        with_genres:
          formik.values.with_genres.length > 0
            ? formik.values.with_genres.join("|")
            : undefined,
      },
    },
    [searchQuery]
  );

  if (isLoading || error) return null;

  return (
    <Fragment>
      <BreadCrumbWidget title="Discover Movies" />
      <Container fluid className="mt-5">
        <Toolbar formik={formik} onSubmit={handleSubmit} />
      </Container>
      <div className="mt-5">
        <Container fluid>
          <div className="card-style-grid">
            <Row className="row row-cols-xl-5 row-cols-md-2 row-cols-1">
              {data.map((i, index) => (
                <Col key={index} className="mb-5">
                  <CardStyle
                    image={`https://image.tmdb.org/t/p/w342/${i.poster_path}`}
                    title={i.title || i.name}
                    subtitle={i?.genres?.join(", ")}
                    link={detailPath("movie", i.id)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ViewAll.displayName = "ViewAll";
export default ViewAll;
