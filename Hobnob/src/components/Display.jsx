import React from "react";
import Search from "./Search";
import PopularItem from "./PopularItem";
import DisplayBanner from "./DisplayBanner";

const Display = () => {
  return (
    <>
      <Search />
      <PopularItem />
      <DisplayBanner />
      <DisplayBanner />
      <DisplayBanner />
      <DisplayBanner />
    </>
  );
};

export default Display;
