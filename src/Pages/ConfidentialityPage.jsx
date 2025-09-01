import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from 'react-i18next';

function ConfidentialityPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {t('confidentiality.breadcrumb.home')}
        </Link>
        <Link component={RouterLink} to="/policies" color="inherit">
          {t('confidentiality.breadcrumb.policies')}
        </Link>
        <Typography color="text.primary">{t('confidentiality.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('confidentiality.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          {t('confidentiality.description')}
        </Typography>

        {['non_disclosure','information_protection','employee_training'].map((section) => (
          <Box key={section} sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {t(`confidentiality.sections.${section}.title`)}
            </Typography>
            <Typography variant="body1" paragraph>
              {t(`confidentiality.sections.${section}.description`)}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            {t('confidentiality.last_updated')}: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default ConfidentialityPage;
