import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppMainMenu from "../Drawer";

import { appMainBarIcons } from './appMainBarIcons';
import { appMainBarIconMenuYou } from './appMainBarIconMenuYou';
import { AppTitleBar } from './AppTitleBar';
import { AppSearchBar } from './AppSearchBar';

export function appMainBar(menuId, handleProfileMenuOpen, mobileMenuId, handleMobileMenuOpen) {
  return <AppBar position="sticky">
    <Toolbar>
      <AppMainMenu />
      {AppTitleBar()}
      {AppSearchBar()}
      <Box sx={{ flexGrow: 1 }} />
      {appMainBarIcons(menuId, handleProfileMenuOpen)}
      {appMainBarIconMenuYou(mobileMenuId, handleMobileMenuOpen)}
    </Toolbar>
  </AppBar>;
}
