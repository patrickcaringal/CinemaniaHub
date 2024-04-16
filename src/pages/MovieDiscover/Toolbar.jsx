import { Fragment, memo } from "react";

//react-bootstrap
import { Badge, Row, Col, Form, Button } from "react-bootstrap";

//components
import CardStyle from "../../components/cards/CardStyle";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//function
import { generateImgPath } from "../../StaticData/data";
import BadgeSelect from "./BadgeSelect";

const Tollbar = memo(() => {
  return (
    <Fragment>
      {/* <Form.Group className="col-auto">
        <Form.Label>Small</Form.Label>
        <select className="form-select form-select-sm mb-3 shadow-none">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Form.Group> */}
      <div className="d-flex flex-row flex-wrap column-gap-4 row-gap-2 gap-2 align-items-center">
        <div className="d-flex flex-row gap-2 align-items-center">
          <Form.Label>Sort</Form.Label>
          <select className="form-select form-select-sm shadow-none">
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="d-flex flex-row gap-2 align-items-center">
          <Form.Label>From</Form.Label>
          <Form.Control
            size="sm"
            type="date"
            id="exampleInputdate"
            defaultValue="2019-12-18"
          />
        </div>

        <div className="d-flex flex-row gap-2 align-items-center">
          <Form.Label>To</Form.Label>
          <Form.Control
            size="sm"
            type="date"
            id="exampleInputdate"
            defaultValue="2019-12-18"
          />
        </div>
      </div>

      <div className="d-flex flex-row gap-2 mt-3">
        <Form.Label>Genres</Form.Label>

        <BadgeSelect />
      </div>
    </Fragment>
  );
});

Tollbar.displayName = "Tollbar";
export default Tollbar;
