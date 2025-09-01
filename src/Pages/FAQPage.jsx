import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Breadcrumbs, 
  Link, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar'; // Ajustez le chemin selon votre structure


function FAQPage() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Récupérer les catégories et questions depuis le JSON
  const faqCategories = t('faq.categories', { returnObjects: true });

  return (
    <>
      <Navbar /> {/* Ajout de la navbar ici */}
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
          <Link component={RouterLink} to="/" color="inherit">
            {t('faq.breadcrumb.home')}
          </Link>
          <Typography color="text.primary">{t('faq.breadcrumb.current')}</Typography>
        </Breadcrumbs>

        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 700, color: '#152748', mb: 4 }}
        >
          {t('faq.title')}
        </Typography>
        
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="body1" paragraph>
            {t('faq.description')}
          </Typography>
          
          {faqCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ fontWeight: 600, color: '#152748', mt: 4, mb: 2 }}
              >
                {category.title}
              </Typography>
              
              {category.questions.map((item, index) => {
                const panelId = `panel-${categoryIndex}-${index}`;
                return (
                  <Accordion 
                    key={index} 
                    expanded={expanded === panelId} 
                    onChange={handleChange(panelId)}
                    sx={{ mb: 1 }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${panelId}-content`}
                      id={`${panelId}-header`}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          ))}
          
          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('faq.footer_text')}
            </Typography>
            <Link 
              component={RouterLink} 
              to="/contact" 
              sx={{
                display: 'inline-block',
                px: 3,
                py: 1,
                backgroundColor: '#ff5600',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 1,
                '&:hover': { backgroundColor: '#0d5ca8' }
              }}
            >
              {t('faq.footer_button')}
            </Link>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default FAQPage;