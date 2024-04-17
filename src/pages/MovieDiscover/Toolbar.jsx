import { Fragment, memo } from "react";

import { Form } from "react-bootstrap";

import BadgeSelect from "./BadgeSelect";

const Toolbar = memo(({ formik, onSubmit }) => {
  const { values, setFieldValue } = formik;

  const handleGenreSelect = (value) => {
    const selectedGenres = values.with_genres;

    if (selectedGenres.includes(value)) {
      setFieldValue(
        "with_genres",
        selectedGenres.filter((i) => i !== value)
      );
    } else {
      setFieldValue("with_genres", [...selectedGenres, value]);
    }
  };

  return (
    <Fragment>
      <div className="d-flex flex-row flex-wrap column-gap-4 row-gap-2 gap-2 align-items-start">
        <div className="d-flex flex-row gap-2">
          <Form.Label className="mt-2">Sort</Form.Label>
          <select
            className="form-select form-select-sm shadow-none"
            value={values.sort_by}
            onChange={(e) => {
              setFieldValue("sort_by", e.target.value);
            }}
          >
            <option defaultValue value="popularity.desc">
              Popularity Descending
            </option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
          </select>
        </div>

        <div className="d-flex flex-row gap-2">
          <Form.Label className="mt-2">From</Form.Label>
          <div>
            <Form.Control
              // className="is-invalid"
              size="sm"
              type="date"
              id="exampleInputdate"
              // defaultValue="2019-12-18"
              onChange={(e) => {
                setFieldValue("release_date.gte", e.target.value);
              }}
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        <div className="d-flex flex-row gap-2">
          <Form.Label className="mt-2">To</Form.Label>
          <div>
            <Form.Control
              // className="is-invalid"
              size="sm"
              type="date"
              id="exampleInputdate"
              // defaultValue="2019-12-18"
              onChange={(e) => {
                setFieldValue("release_date.lte", e.target.value);
              }}
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-2 mt-3">
        <Form.Label>Genres</Form.Label>
        <BadgeSelect
          selected={values.with_genres}
          onSelect={handleGenreSelect}
        />
      </div>

      <div className="iq-button mt-4 d-grid col-sm-12 col-md-2">
        <button className="btn btn-sm" onClick={onSubmit}>
          Search
        </button>
      </div>
    </Fragment>
  );
});

Toolbar.displayName = "Toolbar";
export default Toolbar;
