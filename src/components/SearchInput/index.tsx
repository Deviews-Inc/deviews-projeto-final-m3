import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";

const SearchInput = () => {
  return (
    <>
      <Container>
        <input type="text" />
        <button>
          <AiOutlineSearch />
        </button>
      </Container>
    </>
  );
};
export default SearchInput;
