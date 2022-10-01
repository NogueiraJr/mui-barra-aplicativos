import * as React from 'react';
import Box from '@mui/material/Box';
import Head from 'next/head';

import { appMainBar } from '../components/menus/appMainBar';
import { auxMenu } from '../components/menus/auxMenu';
import { subMnenuYou } from '../components/menus/subMenuYou';

import ClienteCard from "../components/cards/cardCliente"
import ProdutoCard from "../components/cards/cardProduto"

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderYouSubMenu = subMnenuYou(anchorEl, menuId, isMenuOpen, handleMenuClose);
  const renderAuxMenu = auxMenu(mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>Nome do Sistema</title>
      </Head>
      {appMainBar(menuId, handleProfileMenuOpen, mobileMenuId, handleMobileMenuOpen)}
      {renderAuxMenu}
      {renderYouSubMenu}
      <Box sx={{padding: 2}}>
        <ClienteCard />
      </Box>
      <Box sx={{padding: 2}}>
        <ProdutoCard />
      </Box>
    </Box>
  );
}
