import * as React from 'react';
import Menu from '@mui/material/Menu';
import { InfoOutlined } from '@mui/icons-material';
import { auxMenuMessages, auxMenuNotification, auxMenuYou } from './auxMenuItens';

export function auxMenu(mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen) {
  return <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    {auxMenuMessages()}
    {auxMenuNotification()}
    {auxMenuYou(handleProfileMenuOpen)}
  </Menu>;
}

