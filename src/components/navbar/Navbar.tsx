import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import logoRemoveBg from '../../assets/logoRemoveBg.png'

const pages = ['Início', 'Sobre', 'Projetos', 'Contato'];
const settings = ['Início', 'Sobre', 'Projetos', 'Contato'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='fixed' sx={{ bgcolor: (theme) => alpha(theme.palette.background.default, 0.9), py: 1 }} elevation={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Box sx={{ width: '50px', height: '50px' }}>
              <img src={logoRemoveBg} alt="" style={{ width: '100%', height: '100%' }} />

            </Box>
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 700,
                background: "linear-gradient(135deg, #6c15d5 0%, #FF8e38 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              KonectAÍ
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }}>
            <IconButton
              sx={{ bgcolor: "linear-gradient(135deg, #6c15d5 0%, #FF8e38 100%)" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize='large' />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", gap: 6 }}>
            {pages.map((page) => (
              <Button
                variant="text"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  px: 3,
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: 0,
                  backgroundImage: "linear-gradient(90deg, #6B4EFF 0%, #FF8A3D 100%)",
                  backgroundSize: "0% 2px", // começa invisível
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom left", // só na borda inferior
                  transition: "background-size 0.4s ease",
                  "&:hover": {
                    backgroundSize: "100% 2px", // preenche da esquerda pra direita
                  },
                }}
              >
                {page}
              </Button>


            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
