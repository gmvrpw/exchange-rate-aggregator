import { ErrorBoundary, useContext } from "solid-js";

import Header from "../../components/Header";
import Stock from "../../components/Stock";
import NotFound from "../../components/NotFound";

import * as S from "./styles";
import { useSearchContext } from "../../contexts/search";

const StockPage = () => {
  const [, { hide, show }] = useSearchContext();

  return (
    <S.Container
      onScroll={(e) => {
        if (e.target.scrollTop > 0) {
          hide();
        }
        if (e.target.scrollTop === 0) {
          show();
        }
      }}
    >
      <Header />
      <S.Content>
        <ErrorBoundary
          fallback={(error: Error) => {
            if (error.message === "Not Found")
              return <NotFound message={"404 Stock Not Found"} />;
            if (error.message === "Server Unavailable")
              return <NotFound message={"Server Unavailable"} />;
            console.log(error);
            return <NotFound message={"Something Went Wrong"} />;
          }}
        >
          <Stock />
        </ErrorBoundary>
      </S.Content>
    </S.Container>
  );
};

export default StockPage;
