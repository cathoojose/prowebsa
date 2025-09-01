import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, Grid, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from 'react-i18next';

function CustomerSuccessPage() {
  const { t } = useTranslation();

  const cards = ['account_management','progress_updates','strategic_guidance','post_launch_support'];

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          {t('customer_success.breadcrumb.home')}
        </Link>
        <Typography color="text.primary">{t('customer_success.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('customer_success.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          {t('customer_success.description')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
          {t('customer_success.section_title')}
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {cards.map((key) => (
            <Grid item xs={12} md={6} key={key}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{t(`customer_success.cards.${key}.title`)}</Typography>
                  <Typography variant="body2">{t(`customer_success.cards.${key}.description`)}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
        </Box>
      </Paper>
    </Container>
  );
}

export default CustomerSuccessPage;
