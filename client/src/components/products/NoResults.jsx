import { ReactComponent as NoProducts } from "../../assets/noun-no-item-4440881.svg";
import { NoResultsContainer } from "./styled";

const NoResults = () => {
  return (
    <NoResultsContainer>
      <NoProducts />
      <h2>No results found...</h2>
    </NoResultsContainer>
  );
};

export default NoResults;
