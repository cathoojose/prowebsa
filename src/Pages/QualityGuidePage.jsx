import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useTranslation } from 'react-i18next';

function QualityGuidePage() {
  const { t } = useTranslation();
  const standards = t('qualityGuide.standards', { returnObjects: true });
  const process = t('qualityGuide.process', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">{t('qualityGuide.breadcrumb.home')}</Link>
        <Typography color="text.primary">{t('qualityGuide.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('qualityGuide.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>{t('qualityGuide.description')}</Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('qualityGuide.standardsTitle')}
        </Typography>
        <List>
          {standards.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('qualityGuide.processTitle')}
        </Typography>
        <List>
          {process.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon><AssignmentIcon color="primary" /></ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            {t('qualityGuide.contactText')}{' '}
            <Link component={RouterLink} to="/contact" color="primary">
              {t('qualityGuide.contactLink')}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default QualityGuidePage;
