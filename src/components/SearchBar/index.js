import {
  SearchbarContainer,
  CenterDiv,
  Input,
  RightDiv,
  Line,
  InputDesktop,
} from "./styled";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const SearchBar = ({ isSearching, setIsSearching, viewerWidth }) => {
  const [input, setInput] = useState();
  return (
    <>
      {viewerWidth < 865 ? (
        <SearchbarContainer>
          <CenterDiv>
            <Input placeholder="Pesquise um produto" />
            <RightDiv>
              <Line></Line>
              <BiSearch
                style={{ cursor: "pointer" }}
                fontSize="25px"
                color="var(--grey-1)"
              />
            </RightDiv>
          </CenterDiv>
        </SearchbarContainer>
      ) : (
        <>
          {isSearching && (
            <InputDesktop
              value={input}
              onChange={(e) => setInput(e.target.value)}
              isSearching={isSearching}
            />
          )}
          <BiSearch
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => setIsSearching(isSearching ? false : true)}
            fontSize="25px"
          />
        </>
      )}
    </>
  );
};

export default SearchBar;
