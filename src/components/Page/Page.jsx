import React, { Fragment } from "react";
import "./Page.css";
import Header from "../Header/Header";
// import CurrentDay from "../CurrentDay/CurrentDay";
// import Loader from "../Loader/Loader";
import Form from "../Form/Form";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Form />
      {/* <Loader /> */}
      {/* <CurrentDay /> */}
    </Fragment>
  );
};

export default Page;
