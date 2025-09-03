import React, { useState } from 'react'; 
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  Slide,
  Box,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from "../assets/logos/prowebsa.png"; // chemin vers ton logo

// Fonction pour masquer la navbar au défilement
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();

  // Déterminer si nous sommes sur une page avec bannière
  const hasBanner = () => {
    const bannerPaths = ['/', '/services', '/contact'];
    return bannerPaths.includes(location.pathname);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageMenu = (event) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLanguageClose();
  };

  // Items de navigation
  const navItems = [
    { text: 'Services', path: '/services' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'À propos', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <RouterLink to="/">
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 50, my: 2 }}
        />
      </RouterLink>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              color: hasBanner() ? 'white' : 'black',
              textShadow: hasBanner() ? '0px 2px 4px rgba(0,0,0,0.8)' : 'none',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{
                textAlign: 'center',
                '& span': {
                  fontWeight: hasBanner() ? 600 : 400
                }
              }}
            />
          </ListItem>
        ))}
        {/* Bouton de langue dans le drawer mobile */}
        <ListItem 
          onClick={handleLanguageMenu}
          sx={{ 
            color: hasBanner() ? 'white' : 'black',
            textShadow: hasBanner() ? '0px 2px 4px rgba(0,0,0,0.8)' : 'none',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(255, 165, 0, 0.2)',
            }
          }}
        >
          <ListItemText 
            primary={i18n.language === 'fr' ? 'Français' : 'English'} 
            sx={{
              textAlign: 'center',
              '& span': {
                fontWeight: hasBanner() ? 600 : 400
              }
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar 
          component="nav" 
          sx={{ 
            backgroundColor: hasBanner() ? 'rgba(0,0,0,0)' : 'white', 
            boxShadow: 'none',
            color: hasBanner() ? 'white' : 'black',
            transition: 'all 0.3s ease',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            
            {/* Logo à gauche avec lien vers la homepage */}
            <RouterLink to="/">
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: 70,       // fixe la hauteur
                  width: "150px",    // conserve les proportions
                  mr: 2,
                  mt: 2,
                }}
              />
            </RouterLink>

            {/* Menu à droite */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    color: 'inherit',
                    mx: 1,
                    textShadow: hasBanner() ? '0px 2px 4px rgba(0,0,0,0.8)' : 'none',
                    fontWeight: hasBanner() ? 600 : 400,
                    '&:hover': {
                      color: 'orange',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              
              {/* Bouton de langue pour desktop */}
              <Button
                onClick={handleLanguageMenu}
                sx={{ 
                  color: 'inherit',
                  mx: 1,
                  textShadow: hasBanner() ? '0px 2px 4px rgba(0,0,0,0.8)' : 'none',
                  fontWeight: hasBanner() ? 600 : 400,
                  minWidth: 'auto',
                  '&:hover': {
                    color: 'orange',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <TranslateIcon sx={{ mr: 0.5 }} />
                {i18n.language.toUpperCase()}
              </Button>
            </Box>

            {/* Bouton menu mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                ml: 'auto',
                display: { md: 'none' },
                color: hasBanner() ? 'white' : 'black',
                textShadow: hasBanner() ? '0px 2px 4px rgba(0,0,0,0.8)' : 'none'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      {/* Menu de sélection de langue */}
      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={handleLanguageClose}
      >
        <MenuItem onClick={() => changeLanguage('fr')} selected={i18n.language === 'fr'}>
          Français
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('en')} selected={i18n.language === 'en'}>
          English
        </MenuItem>
      </Menu>
      
      {/* Drawer mobile */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              backgroundColor: hasBanner() ? 'rgba(0, 0, 0, 0.8)' : 'white',
              color: hasBanner() ? 'white' : 'black',
              backdropFilter: hasBanner() ? 'blur(10px)' : 'none'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Espace pour la navbar fixe uniquement quand pas de bannière */}
      {!hasBanner() && <Toolbar />}
    </>
  );
}