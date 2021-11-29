import React from "react";
// component
import { useInputHOC } from "components/hoc";
// assets
import { SearchIcon } from "assets/icon";
// styled component
import { InputWrapper, SeachButtonContainer } from "./SearchInput.style";

// -----------------------------------------------------------

const Input = useInputHOC(SeachButtonContainer);

const SearchInput = () => {
  return (
    <InputWrapper>
      <Input
        inputIcon={<SearchIcon />}
        iColor="outlinedRed"
        iSize="medium"
        iFont="smbold"
        placeholder="Search over 10,000 + products "
      />
    </InputWrapper>
  );
};
export default SearchInput;
