import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper } from '../Search';
import { StyledInputBase } from '../StyledInputBase';

export function AppSearchBar() {
  return <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Procurar..."
      inputProps={{ 'aria-label': 'search' }} />
  </Search>;
}
