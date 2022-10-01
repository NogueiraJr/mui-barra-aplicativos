import * as React from 'react';
import Typography from '@mui/material/Typography';
import { TitleApp } from '../functions/functionsInfos';

export function AppTitleBar() {
  return <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    {TitleApp()}
  </Typography>;
}
