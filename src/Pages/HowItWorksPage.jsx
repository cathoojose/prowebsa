import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';

function HowItWorksPage() {
  const { t } = useTranslation();
  const processSteps = t('howItWorks.process', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {t('howItWorks.breadcrumb.home')}
        </Link>
        <Typography color="text.primary">{t('howItWorks.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('howItWorks.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          {t('howItWorks.description')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('howItWorks.title')}
        </Typography>

        <List>
          {processSteps.map((step, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={step.step} secondary={step.detail} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            {t('howItWorks.footer_text')}
            <Link component={RouterLink} to="/contact" color="primary">
              {t('howItWorks.footer_link')}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default HowItWorksPage;
