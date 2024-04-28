import { Fragment, memo, useState } from "react";

import { Container } from "react-bootstrap";
import { useFormik } from "formik";

import { BreadcrumbWidget } from "../../common";
import { useDiscover } from "../../hooks";
import { useEnterExit } from "../../utilities/usePage";

import Toolbar from "./Toolbar";
import CardList from "./CardList";

const initialValues = {
  sort_by: "vote_count.desc",
  first_air_date_gte: undefined,
  first_air_date_lte: undefined,
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

    if (formik.values.first_air_date_gte)
      searchParams.append(
        "first_air_date.gte",
        formik.values.first_air_date_gte
      );

    if (formik.values.first_air_date_lte)
      searchParams.append(
        "first_air_date.lte",
        formik.values.first_air_date_lte
      );

    setSearchQuery(searchParams.toString());
  };

  const { data, error, isLoading } = useDiscover(
    {
      entity: "tv",
      queryParams: {
        sort_by: formik.values.sort_by,
        with_genres:
          formik.values.with_genres.length > 0
            ? formik.values.with_genres.join("|")
            : undefined,
        "first_air_date.gte": formik.values.first_air_date_gte
          ? formik.values.first_air_date_gte
          : undefined,
        "first_air_date.lte": formik.values.first_air_date_lte
          ? formik.values.first_air_date_lte
          : undefined,
      },
    },
    [searchQuery]
  );

  if (isLoading || error) return null;

  return (
    <Fragment>
      <BreadcrumbWidget title="Discover TV Shows" />
      <Container fluid className="mt-5">
        <Toolbar formik={formik} onSubmit={handleSubmit} />
      </Container>
      <div className="mt-5">
        <CardList data={data} />
      </div>
    </Fragment>
  );
});

ViewAll.displayName = "ViewAll";
export default ViewAll;
