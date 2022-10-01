import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { countMessagesIconAppBar, countNotificationsIconAppBar } from '../functions/functionsInfos';

export function auxMenuYou(handleProfileMenuOpen) {
  return <MenuItem onClick={handleProfileMenuOpen}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <p>Você</p>
  </MenuItem>;
}
export function auxMenuNotification() {
  return <MenuItem>
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={countNotificationsIconAppBar()} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <p>Notificações</p>
  </MenuItem>;
}
export function auxMenuMessages() {
  return <MenuItem>
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={countMessagesIconAppBar()} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
    <p>Mensagens</p>
  </MenuItem>;
}
