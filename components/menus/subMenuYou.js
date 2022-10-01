import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export function subMnenuYou(anchorEl, menuId, isMenuOpen, handleMenuClose) {
  return <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        {/* <Badge badgeContent={4} color="error"> */}
        <AssignmentIndIcon />
        {/* </Badge> */}
      </IconButton>
      <p>Perfil</p>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        {/* <Badge badgeContent={4} color="error"> */}
        <ManageAccountsIcon />
        {/* </Badge> */}
      </IconButton>
      <p>Conta</p>
    </MenuItem>
  </Menu>;
}
