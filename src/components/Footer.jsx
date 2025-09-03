import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0d5ca7',
        color: 'common.white',
        mt: 'auto',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* For Clients */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              {t("footer.for_clients")}
            </Typography>
            <FooterLink to="/how-it-works">{t("footer.how_it_works")}</FooterLink>
            <FooterLink to="/customer-success">{t("footer.customer_success")}</FooterLink>
         {/*   <FooterLink to="/stories">{t("footer.stories")}</FooterLink>*/}
            <FooterLink to="/quality-guide">{t("footer.quality_guide")}</FooterLink>
            <FooterLink to="/careers">{t("footer.careers")}</FooterLink>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              {t("footer.quick_links")}
            </Typography>
            <FooterLink to="/">{t("footer.home")}</FooterLink>
            <FooterLink to="/about">{t("footer.about_us")}</FooterLink>
            <FooterLink to="/services">{t("footer.services")}</FooterLink>
            <FooterLink to="/contact">{t("footer.contact")}</FooterLink>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              {t("footer.company")}
            </Typography>
            <FooterLink to="/policies/help">{t("footer.help_support")}</FooterLink>
            <FooterLink to="/policies/terms">{t("footer.terms")}</FooterLink>
            <FooterLink to="/policies/privacy">{t("footer.privacy")}</FooterLink>
          
          {/*  <FooterLink to="/policies/confidentiality">{t("footer.confidentiality")}</FooterLink>*/}
            <FooterLink to="/faqs">{t("footer.faqs")}</FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              {t("footer.contact_info")}
            </Typography>
            <FooterText>{t("footer.address")}</FooterText>
            <FooterText>{t("footer.phone")}</FooterText>
            <FooterText>{t("footer.email")}</FooterText>
            <FooterLink href="mailto:infos@prowebsa.com">
              infos@prowebsa.com
            </FooterLink>
            <Box sx={{ mt: 2 }}>
              <FooterText>{t("footer.follow_us")}</FooterText>
              <FooterText>{t("footer.socials")}</FooterText>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom text centered */}
        <Box
          sx={{
            mt: 6,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            pt: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              textAlign: 'center',
            }}
          >
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// Composant FooterLink simplifié avec scroll vers le haut
function FooterLink({ children, to, href }) {
  const handleClick = () => {
    // Scroll vers le haut pour tous les clics
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return to ? (
    <Link
      component={RouterLink}
      to={to}
      onClick={handleClick}
      underline="hover"
      sx={{
        display: 'block',
        color: 'inherit',
        mb: 1.2,
        lineHeight: 1.6,
        cursor: 'pointer',
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      }}
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href || '#'}
      onClick={handleClick}
      underline="hover"
      sx={{
        display: 'block',
        color: 'inherit',
        mb: 1.2,
        lineHeight: 1.6,
        cursor: 'pointer',
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      }}
    >
      {children}
    </Link>
  );
}

// Composant FooterText
function FooterText({ children }) {
  return (
    <Typography variant="body2" sx={{ display: 'block', mb: 1.2 }}>
      {children}
    </Typography>
  );
}