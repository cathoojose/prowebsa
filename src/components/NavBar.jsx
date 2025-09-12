import React, { useState, useEffect } from 'react'; 
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
import logo from "../assets/logos/prowebsa.png";

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
  const [scrollUp, setScrollUp] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();

  // Détecter la direction du scroll et si on est en haut
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
        setScrollUp(false);
      } else {
        setAtTop(false);
        setScrollUp(window.scrollY < lastScrollY);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasBanner = () => ['/', '/services', '/contact', '/about'].includes(location.pathname);
  const isPortfolioPage = () => location.pathname === '/portfolio';

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleLanguageMenu = (event) => setLanguageAnchor(event.currentTarget);
  const handleLanguageClose = () => setLanguageAnchor(null);
  const changeLanguage = (lng) => { i18n.changeLanguage(lng); handleLanguageClose(); };

  // Menu depuis le JSON
  const navItems = [
    { text: t('navbar.services'), path: '/services' },
    { text: t('navbar.about'), path: '/about' },
    { text: t('navbar.portfolio'), path: '/portfolio' },
    { text: t('navbar.contact'), path: '/contact' },
  ];

  // Déterminer la couleur du texte
  const getTextColor = () => {
    if (isMobile) return 'black';          // Mobile & tablette → toujours noir
    if (isPortfolioPage()) return 'black';
    if (scrollUp) return 'black';
    if (atTop && hasBanner()) return 'white';
    if (hasBanner()) return 'white';
    return 'black';
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <RouterLink to="/">
        <Box component="img" src={logo} alt="Logo" sx={{ height: 60, my: 3 }} />
      </RouterLink>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              color: 'black', // Mobile → toujours noir
              justifyContent: 'center',
              '&:hover': { backgroundColor: 'rgba(255, 165, 0, 0.2)' }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        {/* Correction : langue dans le Drawer (mobile) */}
        <ListItem
          sx={{ color: 'black', justifyContent: 'center', cursor: 'pointer' }}
        >
          <TranslateIcon sx={{ mr: 0.5 }} />
          <ListItemText 
            primary={i18n.language === 'fr' ? 'Français' : 'English'} 
            sx={{ textAlign: 'center' }}
          />
        </ListItem>
        <Box>
          <MenuItem onClick={() => changeLanguage('fr')} selected={i18n.language === 'fr'}>Français</MenuItem>
          <MenuItem onClick={() => changeLanguage('en')} selected={i18n.language === 'en'}>English</MenuItem>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar 
          component="nav" 
          sx={{ 
            backgroundColor: isPortfolioPage() ? 'white' : (hasBanner() ? 'rgba(255,255,255,0.14)' : 'white'), 
            boxShadow: hasBanner() && !isPortfolioPage() ? '0 10px 30px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.3s ease',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            backdropFilter: hasBanner() && !isPortfolioPage() ? 'blur(10px)' : 'none'
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <RouterLink to="/">
              <Box component="img" src={logo} alt="Logo" sx={{ height: 70, width: "150px", mr: 2, mt: 2 }} />
            </RouterLink>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    color: getTextColor(),
                    mx: 1,
                    fontWeight: 600,
                    '&:hover': { color: 'orange', backgroundColor: 'transparent' }
                  }}
                >
                  {item.text}
                </Button>
              ))}

              <Button
                onClick={handleLanguageMenu}
                sx={{ color: getTextColor(), mx: 1, fontWeight: 600, minWidth: 'auto' }}
              >
                <TranslateIcon sx={{ mr: 0.5 }} />
                {i18n.language.toUpperCase()}
              </Button>
            </Box>

            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto', display: { md: 'none' }, color: 'black' }} // Mobile → noir
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Menu desktop uniquement */}
      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={handleLanguageClose}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <MenuItem onClick={() => changeLanguage('fr')} selected={i18n.language === 'fr'}>Français</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')} selected={i18n.language === 'en'}>English</MenuItem>
      </Menu>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 240 } }}
        >
          {drawer}
        </Drawer>
      </Box>

      {!hasBanner() && <Toolbar />}
    </>
  );
}
