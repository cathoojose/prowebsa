import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useTranslation } from 'react-i18next';

const iconMap = {
  SecurityIcon: <SecurityIcon color="primary" />,
  LockIcon: <LockIcon color="primary" />,
  VerifiedUserIcon: <VerifiedUserIcon color="primary" />
};

function TrustSafetyPage() {
  const { t } = useTranslation();
  const securityMeasures = t('trustSafety.securityMeasures', { returnObjects: true });
  const commitmentItems = t('trustSafety.commitmentItems', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">{t('trustSafety.breadcrumb.home')}</Link>
        <Typography color="text.primary">{t('trustSafety.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('trustSafety.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>{t('trustSafety.intro')}</Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('trustSafety.securityMeasuresTitle')}
        </Typography>

        <List>
          {securityMeasures.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>{iconMap[item.icon]}</ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('trustSafety.commitmentTitle')}
        </Typography>
        <Typography variant="body1" paragraph>{t('trustSafety.commitmentIntro')}</Typography>

        <List>
          {commitmentItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            {t('trustSafety.contactText')} <Link component={RouterLink} to="/contact" color="primary">{t('trustSafety.contactLink')}</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default TrustSafetyPage;
