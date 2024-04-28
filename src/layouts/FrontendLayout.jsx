import { memo, Fragment, Suspense, useState, useEffect } from "react";

import { Outlet, Link } from "react-router-dom";

import HeaderDefault from "../common/partials/HeaderDefault";

import FooterDefault from "../common/partials/FooterDefault";
import Loader from "../common/Loader";
import { useAuthContext } from "../hooks";

const FrontendLayout = memo((props) => {
  const { authIsReady } = useAuthContext();

  const [animationClass, setAnimationClass] = useState("animate__fadeIn");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!authIsReady) return <Suspense fallback={<Loader></Loader>} />;
  return (
    <Fragment>
      {/* <Loader></Loader> */}
      <main className="main-content">
        {props.HeaderMega === "true" && <HeaderDefault></HeaderDefault>}
        <Suspense fallback={<Loader></Loader>}>
          <Outlet></Outlet>
        </Suspense>
      </main>
      <FooterDefault />
      <div
        id="back-to-top"
        style={{ display: "none" }}
        className={`animate__animated ${animationClass}`}
        onClick={scrollToTop}
      >
        <Link
          className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
          id="top"
          to="#top"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </Link>
      </div>
    </Fragment>
  );
});

FrontendLayout.displayName = "FrontendLayout";
export default FrontendLayout;
