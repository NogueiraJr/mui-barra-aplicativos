import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import ImageAvatar from "./Avatar";

import CircleIcon from '@mui/icons-material/Circle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SettingsIcon from '@mui/icons-material/Settings';

import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import { common } from '@mui/material/colors';

export default function AppMainMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Administrar', 'Gerenciar'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {index === 0 
                    ? <AdminPanelSettingsIcon sx={{ color: common.black }}/> 
                    : index === 1 
                        ? <PeopleIcon sx={{ color: common.black }}/> 
                        : <CircleIcon sx={{ color: common.black }}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Operacional', 'Dados', 'Relatórios', 'Utilidades'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {index === 0 
                    ? <PlaylistPlayIcon sx={{ color: common.black }}/> 
                    : index === 1 
                        ? <ViewInArIcon sx={{ color: common.black }}/> 
                        : index === 2 
                            ? <LocalPrintshopIcon sx={{ color: common.black }}/> 
                            : index === 3 
                                ? <SettingsIcon sx={{ color: common.black }}/> 
                                : index === 4 
                                    ? <HelpIcon sx={{ color: common.black }}/> 
                                    : <CircleIcon sx={{ color: common.black }}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Ajuda', 'Sair'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {index === 0 
                    ? <HelpIcon sx={{ color: common.black }}/> 
                    : index === 1 
                        ? <LogoutIcon sx={{ color: common.black }}/> 
                        : <CircleIcon sx={{ color: common.black }}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
        >
            <MenuIcon />
        </IconButton>

        <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            >
            <ImageAvatar/>
            {list('left')}
        </Drawer>
    </div>
  );
}
