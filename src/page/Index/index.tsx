import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import SearchBar from "../../components/SearchBar";
import SearchProvider from "../../contexts/search";
import SearchOverlay from "../../components/SearchOverlay";
import Stock from "../Stock";

const IndexPage: Component = () => {
  return (
    <>
      <SearchProvider>
        <SearchBar />
        <SearchOverlay />
        <Routes>
          <Route path="/" element={<h1>Index</h1>} />
          <Route path="/stock/:symbol" component={Stock} />
        </Routes>
      </SearchProvider>
    </>
  );
};

export default IndexPage;
