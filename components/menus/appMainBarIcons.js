import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { countMessagesIconAppBar, countNotificationsIconAppBar } from '../functions/functionsInfos';

export function appMainBarIcons(menuId, handleProfileMenuOpen) {
  return <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={countMessagesIconAppBar()} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={countNotificationsIconAppBar()} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </Box>;
}
