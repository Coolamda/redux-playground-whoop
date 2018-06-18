import React, { Fragment } from "react";

import Navbar from "../components/Navbar";

export default ({ children }) => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    {children}
  </Fragment>
);
