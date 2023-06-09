import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(selector => selector.setSearchText);
  const navigate = useNavigate();

  return (
    <form  onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate('/');
        };

    }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input borderRadius={20} ref={ref} placeholder="Search Games..." variant='filled'></Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput