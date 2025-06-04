import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  SearchButtonWrapper,
  SearchIconWrapper,
  SearchInput,
} from "./SearchBar.style";
import { useState } from "react";

interface SearchBarProps {
  onClick(value: string): void;
  disableButton: boolean;
}

export default function SearchBar({ onClick, disableButton }: SearchBarProps) {
  const [input, setInput] = useState("");
  const shouldDisableSearchButton = disableButton || input.length === 0;

  const handleOnClick = () => {
    onClick(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !shouldDisableSearchButton) {
      onClick(input);
    }
  };

  return (
    <Container>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        data-testid="search-input"
        placeholder="Enter Username"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButtonWrapper
        data-testid="search-button"
        disabled={shouldDisableSearchButton}
        onClick={handleOnClick}
      >
        Search
      </SearchButtonWrapper>
    </Container>
  );
}
