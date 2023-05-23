import { useParams } from "@solidjs/router";

import useStock from "../../resources/stock";

import Details from "../Details";
import StockCard from "../../components/StockCard";

import * as S from "./styles";

const Stock = () => {
  const params = useParams();
  const [stock] = useStock(() => params.symbol);

  return (
    <S.Container>
      <StockCard stock={stock} />
      <Details stock={stock} />
    </S.Container>
  );
};

export default Stock;
