import { Fragment, memo } from "react";

//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardStyle from "../../components/cards/CardStyle";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//function
import { generateImgPath } from "../../StaticData/data";
import { useEnterExit } from "../../utilities/usePage";
import Toolbar from "./Toolbar";

const ViewAll = memo(() => {
  useEnterExit();

  const viewAll = [
    {
      image: generateImgPath("/assets/images/movies/related/01.webp"),
      title: "Giikre",
      movieTime: "2hr: 12mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/02.webp"),
      title: "YoShi",
      movieTime: "1hr: 22mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/03.webp"),
      title: "We Gare",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/04.webp"),
      title: "Avengers",
      movieTime: "1hr: 45mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/05.webp"),
      title: "Chosfies",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/06.webp"),
      title: "Tf Oaler",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/07.webp"),
      title: "Another Danger",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/01.webp"),
      title: "CRW",
      movieTime: "2hr: 12mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/02.webp"),
      title: "Batte Wiire",
      movieTime: "1hr: 22mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/03.webp"),
      title: "Goal",
      movieTime: "2hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/04.webp"),
      title: "Dandacg",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/05.webp"),
      title: "Mexcan",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/06.webp"),
      title: "Oit moleld",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/07.webp"),
      title: "Another Danger",
      movieTime: "1hr: 30mins",
    },
  ];
  return (
    <Fragment>
      {/* <BreadCrumbWidget title="View All" /> */}
      <Container fluid className="mt-5">
        <Toolbar />
      </Container>
      <div className="section-padding">
        <Container fluid>
          <div className="card-style-grid">
            <Row className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              {viewAll.map((item, index) => (
                <Col key={index} className="mb-4">
                  <CardStyle
                    image={item.image}
                    title={item.title}
                    movieTime={item.movieTime}
                    watchlistLink="/playlist"
                    link="/movies-detail"
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
