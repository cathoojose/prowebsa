import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from 'react-i18next';

function CareersPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {t('careers.breadcrumb.home')}
        </Link>
        <Typography color="text.primary">{t('careers.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('careers.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          {t('careers.description')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('careers.why_work')}
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {['innovative_projects','professional_growth','collaborative_culture','competitive_benefits'].map((key) => (
            <Grid item xs={12} md={6} key={key}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{t(`careers.cards.${key}.title`)}</Typography>
                  <Typography variant="body2">{t(`careers.cards.${key}.description`)}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
          {t('careers.current_openings')}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {['frontend','fullstack','ux_ui','devops'].map((job) => (
            <Grid item xs={12} md={6} key={job}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{t(`careers.jobs.${job}.title`)}</Typography>
                  <Typography variant="body2" paragraph>{t(`careers.jobs.${job}.description`)}</Typography>
                  <Button variant="outlined" size="small">{t(`careers.jobs.${job}.button`)}</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            {t('careers.general_application.text')}
          </Typography>
          <Button variant="contained" component={RouterLink} to="/contact">
            {t('careers.general_application.button')}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CareersPage;
