import React, { memo, Fragment } from "react";

// react-router
import { Link } from "react-router-dom";

// img
import Logo1 from "/assets/images/Logo.png";

const Logo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src={Logo1}
            loading="lazy"
            alt="CinemaniaHub"
          />
        </Link>
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
