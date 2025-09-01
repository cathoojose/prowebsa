import React from 'react';
import { Container, Typography, Paper, Box, Breadcrumbs, Link, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from 'react-i18next';

function StoriesPage() {
  const { t } = useTranslation();
  const storiesList = t('stories.storiesList', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">{t('stories.breadcrumb.home')}</Link>
        <Typography color="text.primary">{t('stories.breadcrumb.current')}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#152748', mb: 4 }}>
        {t('stories.title')}
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>{t('stories.description')}</Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {storiesList.map((story, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">{story.title}</Typography>
                  <Typography variant="body2" paragraph>{story.description}</Typography>
                  <Button variant="outlined" size="small">{story.button}</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" paragraph>{t('stories.ctaText')}</Typography>
          <Button variant="contained" component={RouterLink} to="/contact">
            {t('stories.ctaButton')}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default StoriesPage;
