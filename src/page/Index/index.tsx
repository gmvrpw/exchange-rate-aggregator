import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const IndexPage: Component = () => {
  return (
    <>
      <div>Search Overlay</div>
      <Routes>
        <Route path="/" />
        <Route path="/stock" />
      </Routes>
    </>
  );
};

export default IndexPage;
