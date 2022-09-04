import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PostContext } from "../../providers/PostContext";
import { Container } from "./styles";
const SearchInput = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");

  const { searchPost } = useContext(PostContext);

  return (
    <>
      <Container>
        <input
          type="text"
          value={inputSearchValue}
          onChange={(event) => setInputSearchValue(event.target.value)}
        />
        <button type="button" onClick={() => searchPost(inputSearchValue)}>
          <AiOutlineSearch />
        </button>
      </Container>
    </>
  );
};
export default SearchInput;
