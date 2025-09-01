import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from 'react-i18next';

function PrivacyPage() {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {t('privacy.breadcrumb.home')}
        </Link>
        <Link component={RouterLink} to="/policies" color="inherit">
          {t('privacy.breadcrumb.policies')}
        </Link>
        <Typography color="text.primary">{t('privacy.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('privacy.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          {t('privacy.description')}
        </Typography>

        {sections.map((section, index) => (
          <Box key={index} sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {section.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {section.content}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            {t('privacy.last_updated')}: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default PrivacyPage;
