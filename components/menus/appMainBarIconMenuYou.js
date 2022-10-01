import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

export function appMainBarIconMenuYou(mobileMenuId, handleMobileMenuOpen) {
  return <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
    <IconButton
      size="large"
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  </Box>;
}
