import React from "react";
// component
import { useInputHOC } from "components/hoc";
// assets
import { SearchIcon } from "assets/icon";
// styled component
import { InputWrapper, SeachButtonContainer } from "./SearchInput.style";

// -----------------------------------------------------------

const SearchInput = () => {
  const Input = useInputHOC(SeachButtonContainer);
  return (
    <InputWrapper>
      <Input
        inputIcon={<SearchIcon />}
        iColor="outlinedGray"
        iSize="small"
        iFont="smbold"
        iRadius="right"
        placeholder="Search Item... "
      />
    </InputWrapper>
  );
};
export default SearchInput;
