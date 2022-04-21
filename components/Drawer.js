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

import CircleIcon from '@mui/icons-material/Circle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SettingsIcon from '@mui/icons-material/Settings';

import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

export default function TemporaryDrawer() {
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
                    ? <AdminPanelSettingsIcon /> 
                    : index === 1 
                        ? <PeopleIcon /> 
                        : <CircleIcon/>}
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
                    ? <PlaylistPlayIcon /> 
                    : index === 1 
                        ? <ViewInArIcon /> 
                        : index === 2 
                            ? <LocalPrintshopIcon /> 
                            : index === 3 
                                ? <SettingsIcon /> 
                                : index === 4 
                                    ? <HelpIcon /> 
                                    : <CircleIcon/>}
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
                    ? <HelpIcon /> 
                    : index === 1 
                        ? <LogoutIcon /> 
                        : <CircleIcon/>}
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
            {list('left')}
        </Drawer>
    </div>
  );
}
